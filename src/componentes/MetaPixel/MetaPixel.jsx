import React from "react";
import { Helmet } from "react-helmet";
const MetaPixel = () => {
  return (
    <Helmet>
<script key='function' id="facebook-pixel-script">
{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1271593290050934');
fbq('track', 'PageView');`}
</script>
<noscript key='image' id="facebook-pixel-image">
    {`<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1271593290050934&ev=PageView&noscript=1"
/>`}
</noscript>
    </Helmet>
  );
};

export default MetaPixel;

// EAAypR7mz2VQBO0r3zXqiQPcbJuZCXBc5aj82vTiBiuqbxmnI1HZA9Y8ouPBjJ9t9ubfZBg36vTqoD57hCx43MPJz0p955xpTlbXbnA6NGf7ZCuL9l8Tk03q1tN9ZBhe2fTE53vzL6pFUuXVgx0OdNls7chPOMRPLbZB5aoc0nDxkoKI9Kzqg5Mi4wS0nrt3WboQwZDZD
