import {
  type AuthzResourceResponse,
  GEN3_AUTHZ_API,
  GEN3_AUTHZ_SERVICE,
} from '@gen3/core/server';

const DEFAULT_TTL_SECONDS = 360;

interface AuthzResourceData {
  name: string;
  path: string;
  description: string;
  subresources?: string[];
}


/**
 * Low-level helper to fetch Arborist resources for the current user.
 * Adds an Authorization header when a token is provided and normalizes the response
 * to a simple string[] of resource paths.
 */
export async function fetchArboristResources(
  accessToken: string | null,
  useService: boolean = false,
  revalidate: number = DEFAULT_TTL_SECONDS,
): Promise<string[]> {
  const headers: Record<string, string> = {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    credentials: 'include',
  };

  const url = useService
    ? `${GEN3_AUTHZ_SERVICE}/resource`
    : `${GEN3_AUTHZ_API}/resources`;
  const res = await fetch(url, { headers, next: { revalidate: revalidate } });

  const resTest = await fetch(`${GEN3_AUTHZ_SERVICE}/resource`, { headers, next: { revalidate: revalidate } });
  const resTest2 = await fetch(`${GEN3_AUTHZ_API}/resources`, { headers, next: { revalidate: revalidate } });
  console.log('resTest', resTest);
  console.log('resTest2', resTest2);
  if (!res.ok) {
    console.error(
      'commons:fetchArboristResources Arborist /resource failed:',
      res.status,
      await res.text(),
    );
    return [];
  }
  // the resource response is different from the resources response
  if (useService) {
    const data = (await res.json()) as { resources: Array<AuthzResourceData> };
    return data.resources.map((r) => r.path) ?? [];
  }
  const data = (await res.json()) as AuthzResourceResponse;
  return data.resources ?? [];
}
