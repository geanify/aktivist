
const { location: _location } = window;


if(!_location.toString().includes('localhost')) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-S3LHH1FWKH');
}
