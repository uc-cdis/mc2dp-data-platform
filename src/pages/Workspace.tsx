import { GetServerSideProps } from 'next';

export default function OldPage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/Workspaces',
      permanent: true, // true forces a 308/301 permanent status
    },
  };
};
