import React from 'react';
import { Title, Table, Mark } from '@mantine/core';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';

const StatsPage = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  const elements = [
     {
      "source": "Renal Cell Carcinoma (RCC)",
      "cohortStudy": "Cohort F (VABio Legacy/APOLLO5 cohort) A subset of individuals have RCC",
      "datatype": "Entire Cohort F contains: Clinical OMOP CDM (n=348), Primary Oncology (n = 314), Epidemiology (n = 534), Genomics (n = 49),RCC cohort (n = 23)",
      "description": "Longitudinal clinical EHR data in the OMOP CDM format for all Veterans in Cohort F. This includes RCC and non-RCC cases. For RCC,  clear cell kidney adenocarcinomas, papillary or mixed cell kidney adenocarcinomas, and kidney renal cell carcinomas including chromophobe type are represented, Primary Oncology data for all Veterans in cohort F, including RCC and non-RCC cases. This dataset contains specific Histology diagnosis based on ICDO3X, Primary site, Date of Diagnosis, tumor morphology, surgery and treatment details among others. Targeted variables based on HistologyICDO3X, Primary site and Date of Diagnosis used for RCC pilot analysis, focusing only on the cohort with RCC, Epidemiology questionnaire data for all Veterans in cohort F, including RCC and non-RCC cases.  Exposure information on smoking, alcohol, military exposures and miliary branch association used for RCC pilot analysis, focusing on epidemiology data specific to RCC cohort, Genomics data is whole genome sequencing data, processed using DRAGEN pipeline. Data consists of somatic DNA mutations (MAF), somatic copy number mutations, tumor gene expression and germline VCFs from 49 individuals. RCC pilot analysis conducted on genomic data specific to RCC cohort",
      "type": "Clinical OMOP CDM data for cohort F connected to ATLAS and PLP apps (VPODC). Primary Oncology, epidemiology and Genomics connected to secure workspaces in VPODC/MC2DP",
      "status": "[Established - Real Data]",
      "patients": "RCC cohort (n = 23)"
    },
    {
      "source": "VPODC",
      "cohortStudy": "VA-REPOP",
      "datatype": "Longitudinal clinical, targeted sequencing, Imaging",
      "description": "Multi-modality radiology imaging (DICOM) for pan-cancer VA/DoD/NCI participants" ,
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "819/819 Imaging data for 10 patients received"
    },
    {
      "source": "VPODC",
      "cohortStudy": "VABio/ APOLLO 5/ Prometheus 8A",
      "datatype" : "Longitudinal clinical, targeted sequencing, Imaging",
      "description": "Longitudinal clinical (OMOP CDM), targeted sequencing, and imaging data for Veterans",
      "type": "API",
      "status": "[No Clinical Data, Imaging Data Received - Connection Pending]",
      "patients": "0/1878 Imaging data for 24 patients"
    },
    {
      "source": "GDC",
      "cohortStudy": "APOLLO LUAD",
      "datatype": "Genomics",
      "description": "Lung adenocarcinoma data with clinical metadata (cancer type, stage, exposure, diagnosis) and associated genomic files (aligned reads and structural rearrangements)",
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "87/87"
    },
    {
      "source": "PDC",
      "cohortStudy": "APOLLO LUAD",
      "datatype": "Proteomics",
      "description": "Proteomic and phosphoproteomic profiling of lung adenocarcinoma with clinical information, including raw and processed mass spectra, peptide spectral matches, and protein assembly files.",
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "100/100"
    },
    {
      "source": "GDC",
      "cohortStudy": "APOLLO OV",
      "datatype": "Genomics",
      "description": "Genomic and clinical data for ovarian epithelial neoplasms, including whole genome sequencing (WGS) and RNA-Seq files",
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "70/70"
    },
    {
      "source": "PDC",
      "cohortStudy": "APOLLO OV",
      "datatype": "Proteomics",
      "description": "Mass spectrometry based proteomic and clinical data for ovarian epithelial neoplasms including raw and processed mass spectra, peptide spectral matches, and protein assembly files",
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "70/70"
    },
    {
      "source": "Windber",
      "cohortStudy": "APOLLO 5",
      "datatype": "Clinical Metadata",
      "description": "Summary clinical metadata for pan-cancer VA/DoD/NCI participants, including diagnosis, cancer type, and demographics",
      "type": "API",
      "status": "[Synthetic Data]",
      "patients": "175/175"
    },
    {
      "source": "Windber",
      "cohortStudy": "APOLLO 5",
      "datatype": "Clinical Detailed",
      "description": "Detailed clinical data for pan-cancer participants, including VMOAT exposure/toxin assessments and associated clinical annotations",
      "type": "API",
      "status": "[Synthetic Data]",
      "patients": "58/175"
    },
    {
      "source": "Windber",
      "cohortStudy": "PROMETHEUS 8A",
      "datatype": "Clinical Metadata",
      "description": "Summary clinical metadata for pan-cancer DoD participants, including diagnosis, cancer type, and demographics",
      "type": "API",
      "status": "[Synthetic Data]",
      "patients": "56/56"
    },
    {
      "source": "PNNL",
      "cohortStudy": "PROMETHEUS 8A",
      "datatype": "Proteomics",
      "description": "Plasma proteomics from liquid biopsy specimens, including raw and processed mass spectra and protein-group quantitation, covering chemical toxin exposure and metastasis data",
      "type": "CBDX",
      "status": "[Synthetic Data]",
      "patients": "144/144"
    },
    {
      "source": "Ellison",
      "cohortStudy": "PROMETHEUS 8A",
      "datatype": "Metabolomics",
      "description": "-",
      "type": "CBDX*",
      "status": "[Data Pending]",
      "patients": ""
    },
    {
      "source": "TCIA",
      "cohortStudy": "APOLLO 5",
      "datatype": "Images",
      "description": "Multi-modality radiology imaging (DICOM) for pan-cancer VA/DoD/NCI participants",
      "type": "API",
      "status": "[Data Pending]",
      "patients": ""
    },
    {
      "source": "TCIA",
      "cohortStudy": "VA-REPOP",
      "datatype": "Images",
      "description": "Longitudinal clinical data, targeted sequencing, and radiology imaging for Veterans in the VA RePOP cohort",
      "type": "API",
      "status": "[Established - Real Data]",
      "patients": "32/819"
    },
  ];
  type BgColorsType = {[key: string]: string};
  const bgColors: BgColorsType = {
    '[Established - Real Data]': 'bg-green-100',
    '[Established - Real Data Pending]': 'bg-orange-100',
    '[Synthetic Data]': 'bg-orange-100',
    '[Connection Pending]': 'bg-red-100',
    '[Data Pending]': 'bg-red-100',
    '[No Clinical Data, Imaging Data Received - Connection Pending]': 'bg-red-100',
  };
  const rows = elements.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{element.source}</Table.Td>
      <Table.Td>{element.cohortStudy}</Table.Td>
      <Table.Td>{element.datatype}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.type}{element.type == "CBDX" ? <sup>*</sup> : ""}</Table.Td>
      <Table.Td className={bgColors[element.status]}>{element.status}</Table.Td>
      <Table.Td>{element.patients}</Table.Td>
    </Table.Tr>
  ));
  return (
    <NavPageLayout
      {...{ headerProps, footerProps }}
      headerMetadata={{
        title: 'Data Connections',
        content: 'Data Connections',
        key: 'gen3-DataConnections-page',
      }}
    >
      <div className="w-full m-10">
        <Title order={1}>Data Connections</Title>
        <Table striped tabularNums withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Source</Table.Th>
              <Table.Th>Cohort / Study</Table.Th>
              <Table.Th>Data Type</Table.Th>
              <Table.Th>Data Description</Table.Th>
              <Table.Th>Connection Type</Table.Th>
              <Table.Th>Connection Status</Table.Th>
              <Table.Th># Patients Available/Expected</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <p><Mark className={bgColors['[Established - Real Data]']}>Green color</Mark>: connection established with real data</p>
        <p><Mark className={bgColors['[Synthetic Data]']}>Orange color</Mark>: connection established with synthetic data</p>
        <p><Mark className={bgColors['[Data Pending]']}>Red color</Mark>: connection not working/connection pending/data pending</p>
        <p><Mark className={bgColors['[No Clinical Data, Imaging Data Received - Connection Pending]']}>Red color</Mark>: connection not working/connection pending/data pending</p>
        <p><sup>*</sup>CBDX - Cloud Bucket Data Exchange</p>
      </div>
    </NavPageLayout>
  );
};

// TODO: replace this with a custom getServerSideProps function
export const getServerSideProps: GetServerSideProps<
  NavPageLayoutProps
> = async () => {
  return {
    props: {
      ...(await getNavPageLayoutPropsFromConfig()),
    },
  };
};

export default StatsPage;
