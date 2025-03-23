import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

const Profile = () => {
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Profile.title') });

  return (
    <ViewLayout pageTitle={t('views:Profile.title')} pageSubtitle="Subtitle">
      <>
        <span>
          ...Profile page view...{t('button.theme')}...
          <br />
          Nec aenean, nisl vel purus sollicitudin varius duis id congue nulla proin urna, quis praesent molestie
          ullamcorper. Vulputate dolor quis, lectus ornare porttitor sem lobortis vel arcu dolor ut vitae, fusce vitae
          fusce mattis quis. Dui vel dolor odio leo, quam maximus rutrum pulvinar a aliquet leo vitae, semper donec
          suspendisse magna. Nunc molestie, euismod in ex sem ultricies at sem mi orci nulla ac nec, et elit quam dolor
          sit amet dui. Nullam nibh, sem lobortis placerat donec sapien nullam elementum luctus et elit, fermentum et
          nisl donec fusce vitae. Condimentum a lacinia, erat id lorem ut venenatis ornare faucibus urna imperdiet,
          vulputate enim nullam fusce ante.
        </span>
      </>
    </ViewLayout>
  );
};

export default Profile;
