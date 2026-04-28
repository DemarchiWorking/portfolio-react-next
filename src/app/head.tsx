export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              var _consent = null;
              try {
                _consent = window.localStorage.getItem('lgpd_consent');
              } catch(e){}

              var _state = _consent === 'accepted' ? 'granted' : 'denied';

              gtag('consent', 'default', {
                ad_storage: _state,
                analytics_storage: _state,
                ad_user_data: _state,
                ad_personalization: _state,
                wait_for_update: _consent === null ? 2000 : 0
              });
            })();
          `,
        }}
      />
    </>
  )
}