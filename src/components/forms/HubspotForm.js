import { useEffect } from 'react';
import styles from '../../app/HubspotForm.module.css';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/shell.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "6700414",
          formId: "ed501a21-d350-4fa5-8041-d60eb61cfd79",
          target: `.${styles.container}`, // select via class
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div className={styles.container}></div>;
};

export default HubspotForm;
