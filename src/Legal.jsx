import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import './styles/Legal.css'
import logo from './assets/logo.png'
import {BiMenu} from 'react-icons/bi'
import { Background } from './components/Background'
import { Footer } from './sections/Footer'

export const Legal = () => {

    useEffect(() => {
        const htmlDiv = document.getElementById('html');
        htmlDiv.style.overflowY = 'visible'
    },[])

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 200) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <div>
        <Background />
        <div className='header'>
            <div className={navbar == true ? "header_inner_active" : "header_inner"}>
                <Link to='/'><img className='header_logo' src={logo} alt="Logo" /></Link>
            </div>
        </div>
        <div className="legal">
            <h2>Terms and Conditions</h2>
            <h5>1. General </h5>
            <p>The user shall read these terms and conditions (the “Terms and Conditions”) carefully before using this website (the “Website”, “Shake The Box” or “We” indistinctly). By accessing or using the Website or any image generated at the Website (the “Images” and together with the Website, the “Services”) the user agrees to be bound to these Terms and Conditions as well as the additional policies referenced hereby. It is the responsibility of the user of the Website, to read all terms and conditions before using the Website and its Services. If the user doesn’t expressly agree to these terms and conditions, they shall not access or use the Website or use the Services provided. All offers on this Website, including all information, tools and services available from this Website to the user are conditioned upon the user’s acceptance of all terms, conditions, policies and notices stated here or/and the rest of the Website, including the terms and conditions of Third-party applications that We may use in order to provide the Services described above. If the user accesses the Website from a location outside the United States of America or the participating Countries such as Australia, Germany, Italy, Spain, France, United Kingdom, Panamá, Ecuador, El Salvador, Chile, and Costa Rica, you will be responsible for compliance with all local laws.</p>
            <h5>2. Third party licenses and permits notice</h5>
            <p>
            “License” shall mean the terms and conditions for use, reproduction and distribution by the third party licensors that we use that allows us to offer the service. We may partially modify the images or files that these licensors could have provided us. Any use, reproduction and/or distribution shall be under the terms and conditions of the following licensors. The user shall review the terms and conditions attached next.
                <ul style={{padding: '20px 0', listStyleType: 'none'}}>
                    <li>a) <a style={{textDecoration: 'underline'}} href="https://github.com/huggingface/diffusers/blob/main/LICENSE" target='_blank'>Apache License 2.0</a></li>
                    <li>b) <a style={{textDecoration: 'underline'}} href="https://github.com/TheLastBen/fast-stable-diffusion/blob/main/LICENSE" target='_blank'>Fast Stable diffusion MIT license copyrighted by 2022 Ben </a></li>
                    <li>c) <a style={{textDecoration: 'underline'}} href="https://huggingface.co/spaces/CompVis/stable-diffusion-license" target='_blank'>Stable Diffusion Licence copyrighted by 2022 Robin Romach and Patrick Esser and contributors</a></li>
                </ul>
            </p>
            <h5>3. Access to the Website.</h5>
            <p>You agree that you will not use our Services in any country or in any manner prohibited by any applicable laws, restrictions, or regulations. 

            For using the Website you must be at least 13 years old. If you are under 18 you must have your parent or legal guardian’s permission to use the Services. If you use the Services on behalf of another person or entity, you must have the authority to accept the Terms and Conditions on their behalf.  
<br /><br />
            You may not use the Website or Services for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction. 
<br /><br />
            We have the right, but not the obligation, to take any of the following actions in our sole discretion at any time and for any reason without giving you any prior notice, i) restrict, suspend or terminate your access to all or any part of our Website, ii) change, suspend or discontinue all or any part of our Services or Website, iii) refuse, move, or remove any content that is available on all or any part of our Website, and; iv) establish general practices and limits concerning use of our Website. You agree that we will not be liable to you or any third party for taking any of these actions. 
<br /><br />
            You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Website, use of the Website, or access to the Website, without express written permission by us. You may not transmit any worms or viruses or any code of a destructive nature. 
<br /><br />
            Using the Website does not entitle users to make any unauthorized use of any Images that may infringe on the rights of us or other parties (“Protected Content”). You will use Protected Content solely for your personal use and will make no other use of Protected Content, including any commercial use of the Protected Content. </p>
            <h5>4. Further changes</h5>
            <p>We reserve the right to update, change or replace any part of these Terms and Conditions by posting updates and/or changes to our Website and reserve the right at any time it may deem fit, to modify, alter and or discontinue, whether temporarily or permanently, our service, or any part thereof, with or without prior notice. It is your responsibility to check this page periodically for changes. Your continued use of or access to the Website constitutes acceptance of those changes. 
<br/><br/>
Subject to your compliance with these Terms and Conditions, you are granted a limited, non-exclusive, non-sublicensable, non-transferrable, non-assignable, revocable license to use the Services. </p>
            <h5>5. Intellectual property rights and Royalties </h5>
            <p>
            You hereby grant to us a perpetual, worldwide, non-exclusive, sublicensable, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, or distribute any prompts (in any form) you enter into the Website and any Images produced by the Services at your direction. 
<br/><br/>
            You agree not to make use of the Website and Services (including its models, or derivatives of these models) i) to infringe upon the intellectual property rights of any third party, ii) to violate any applicable law or regulation, ii) to generate or disseminate verifiably false information with the purpose of harming others, iii) to impersonate or attempt to impersonate others, iv) to defame, libel, disparage, bully, threaten, stalk, or otherwise harass others, v) to create content that implies or promotes support or funding of violence against people based on race, ethnicity, color, national origin, religion, age, gender, sexual orientation, disability, medical condition, or any other protected legal category. 
            </p>
            <h5>6. Indemnification</h5>
            <p>
            You agree to release, defend, indemnify and hold us harmless, our subsidiaries, affiliates, agents, employees, officers, partners and/or licensors for any claims, damages, costs, liabilities and expenses of every kind and nature arising out of or related to your use of Services or your conduct in connection with these Services, including your violations of the Terms and Conditions and/or your violation of any such rights of another person or use of Images in such a way that violates any rights of another party. 
<br/><br/>
            You further acknowledge that all Images are generated by using a model that was trained algorithmically using public or proprietary data sets. We do not accept any responsibility for, or guarantee the accuracy, integrity, quality, or content of, any Images. You acknowledge, understand, and agree that you are solely responsible for your use of the Images. Whether the use of any Image infringes on another party's intellectual property rights depends on both the nature of the specific Image and your particular use of the Image. If you have doubts about whether the use of a particular Image may infringe on another party's intellectual property rights, you should seek legal advice according to local laws. 
<br/><br/>
            We may, without any prior written notice, immediately suspend, terminate, discontinue and/or limit access to any of our Services or your license to use our Services. The cause for such termination, discontinuance, suspension and/or limitation of access may include, but is not limited to i) any breach or violation of these Terms and Conditions, ii) at the request of law enforcement, iii) the discontinuance, alteration and/or material modification to our Services, or any part thereof, iv) unexpected technical or security issues and/or problems. Furthermore, you herein agree that all terminations, suspensions, discontinuances, and or limitations of access for cause shall be made at our sole discretion and that we shall not be liable to you or any other third party with regards to the termination of your access to any of our Services. 
<br/><br/>
            We or any third party included in the Services may provide hyperlinks to other websites and/or resources (such as social media). You acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and as such, we do not endorse nor are we responsible or liable for any content, products, advertising or any other materials, on or available from such third-party sites or resources. Furthermore, you acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any such damage or loss which may be a result of, caused or allegedly to be caused by or in connection with the use of or the reliance on any such content, goods or Services made available on or through any such site or resource. 
<br/><br/>          
            You herein expressly acknowledge and agree that the use of our Services is at your sole risk and we make no warranties regarding the use of these Services. Any information or material downloaded or obtained by way of our Services shall be accessed by your sole discretion and risk and you will waive any and all claims towards us. You explicitly acknowledge and agree that we and our subsidiaries, affiliates, officers, employees, partners and licensors shall not be liable to you for any direct or indirect and consequential damages, including but not limited to loss of any profits, goodwill, use or data. 
            </p>
            <h5>7. Applicable jurisdiction</h5>
            <p>
            If one or more provisions of these Terms and Conditions prove to be wholly or partly invalid or unenforceable, they will be replaced by provisions to which this does not apply and which, as far as possible, regulate the same as the invalid and/or unenforceable provision. All legal relationships between you and us are governed by and shall be interpreted in accordance with American law. Disputes in the first instance will only be submitted to the Court of the United States of America.
            </p>
            <h5>8. Cookies</h5>
            <p>
            We do use cookies on our site, for functional and analytical purposes only. Shake The Box uses for instance cookies to identify returning users and for the counting of in traffic statistics analysis. For some types of cookies, we engage with other organizations, if that was the case, we’d refer to that company's website for more information. We may share non-personal information and aggregated information with these kind of third parties and no personal information will be shared in this manner.  
            <br/><br/>
            The cookie related information is not used to identify you personally and is not used for any purpose other than those described above. Third-party applications we may use in our Services can use cookies and we refer you to their cookie statement. These third parties do not receive any personal data from us, but they may track your use of their website, combine this information with data from other websites you have visited that are also tracked by the respective third parties and may use this information and/or personal date for their own purposes. If you prefer not to use cookies at all, we recommend adjusting your browser settings accordingly. 
            </p>
            <h5>9. Privacy and data protection</h5>
            <p>
            Shake The Box respect your privacy. When you use our Services we do not collect personal information other than your IP address and data about your activities on the Website in order to provide our Services to you in an optimal form and/or to help us improve our Services for you as the user. Shake The Box and its Services does not intend to collect data about website visitors who are under age. Unless they have permission from parents or guardians. However, we cannot check whether a visitor is older than 18 or not. We therefore advise parents to be involved in their children's online activities to avoid collecting data on children without parental consent. 
<br/><br/>
            We do not process other personal data, because our website does not allow you to leave personal data and even if we use social media plugins. We therefore do not process or store this kind of personal data from you. Third-party applications we use in our Services may process personal data and we refer you to their privacy statement for more information on the way they process and store your personal data. 
            </p>
        </div>
        <Footer />
    </div>
  )
}
