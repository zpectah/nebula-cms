import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

const Dashboard = () => {
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Dashboard.title') });

  return (
    <ViewLayout pageTitle={t('views:Dashboard.title')} pageSubtitle="Subtitle" disableBreadcrumbs={false}>
      <>
        <span>
          ...Dashboard page view...{t('button.theme')}...
          <br />
          Nec aenean, nisl vel purus sollicitudin varius duis id congue nulla proin urna, quis praesent molestie
          ullamcorper. Vulputate dolor quis, lectus ornare porttitor sem lobortis vel arcu dolor ut vitae, fusce vitae
          fusce mattis quis. Dui vel dolor odio leo, quam maximus rutrum pulvinar a aliquet leo vitae, semper donec
          suspendisse magna. Nunc molestie, euismod in ex sem ultricies at sem mi orci nulla ac nec, et elit quam dolor
          sit amet dui. Nullam nibh, sem lobortis placerat donec sapien nullam elementum luctus et elit, fermentum et
          nisl donec fusce vitae. Condimentum a lacinia, erat id lorem ut venenatis ornare faucibus urna imperdiet,
          vulputate enim nullam fusce ante.
          <br />
          Vitae massa vehicula, odio leo congue fusce ante cursus aliquam ut nisl mauris curabitur, fermentum sed
          bibendum ullamcorper. Facilisis quam, consectetur donec volutpat nisl vel purus vehicula tempus a vitae, in
          donec vulputate ultrices nulla a. Id nam, vehicula hendrerit nibh maximus varius condimentum quam varius,
          sapien ac nec pretium accumsan metus. Tortor metus, potenti volutpat pulvinar consequat aliquet odio morbi
          ornare, quam integer iaculis ante. Nulla lorem fringilla, ut venenatis tellus hendrerit augue vitae sit amet
          praesent, dui et tempus ipsum libero nisl. Nibh maximus ligula, duis id condimentum mattis mauris sapien
          ligula luctus, ante imperdiet maximus venenatis.
          <br />
          Pharetra dolor sit amet, quis orci sollicitudin non congue suscipit vulputate aliquam vitae, sed porttitor
          neque a sem odio. Ullamcorper semper, bibendum tellus sed sapien nullam magna et quis, aenean sollicitudin
          morbi quam. Neque aliquam, fusce ante mattis rhoncus fringilla curabitur neque vitae, volutpat erat id
          volutpat semper. Convallis hendrerit, odio euismod lorem ipsum dolor sit amet curabitur urna tristique nunc,
          mauris convallis congue dui vel. Quam scelerisque, elementum luctus convallis ultricies ultricies aliquet
          mollis dolor ut, posuere et fusce gravida nulla. Molestie proin, sollicitudin curabitur condimentum lectus
          erat id dui et tempus consequat, aliquam suspendisse lorem ipsum vivamus.
        </span>
      </>
    </ViewLayout>
  );
};

export default Dashboard;
