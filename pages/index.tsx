import { NextPage } from 'next';
import { ServiceLayout } from '@/component/service_layout';

const IndexPage: NextPage = function () {
  return <ServiceLayout title="test">test</ServiceLayout>;
};

export default IndexPage;
