import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  import React from 'react'
  import style from './Social.module.css';
  export default function Social() {
    return (
            <div className={style.socialContainer}>
                <a href="https://www.linkedin.com/in/himanshu524/" className={style.youtube}>
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/himanshu524/" className={style.facebook}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/himanshu524/" className={style.twitter}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/himanshu_raj_008/" className={style.instagram}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
        </div>
    )
  }
  