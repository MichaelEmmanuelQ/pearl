import { FC, memo } from 'react';

import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowLeftIcon2 } from './ArrowLeftIcon2';
import { BackgroundCompleteIcon } from './BackgroundCompleteIcon';
import { BackgroundCompleteIcon2 } from './BackgroundCompleteIcon2';
import { CharacterIcon } from './CharacterIcon';
import { CharacterIcon2 } from './CharacterIcon2';
import { CheckIcon } from './CheckIcon';
import { CheckIcon2 } from './CheckIcon2';
import { CheckIcon3 } from './CheckIcon3';
import { CheckIcon4 } from './CheckIcon4';
import { CheckIcon5 } from './CheckIcon5';
import { CheckIcon6 } from './CheckIcon6';
import { CheckIcon7 } from './CheckIcon7';
import { CheckIcon8 } from './CheckIcon8';
import { CheckIcon9 } from './CheckIcon9';
import { CheckIcon10 } from './CheckIcon10';
import { CheckIcon11 } from './CheckIcon11';
import { CheckIcon12 } from './CheckIcon12';
import { CheckIcon13 } from './CheckIcon13';
import { CheckIcon14 } from './CheckIcon14';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse5Icon } from './Ellipse5Icon';
import { Ellipse5Icon2 } from './Ellipse5Icon2';
import { EnvelopeIcon } from './EnvelopeIcon';
import { Excellence1Icon } from './Excellence1Icon';
import { FacebookSquareIcon } from './FacebookSquareIcon';
import { FigmaIcon } from './FigmaIcon';
import { FloorIcon } from './FloorIcon';
import { Frame3Icon } from './Frame3Icon';
import { Frame3Icon2 } from './Frame3Icon2';
import { Frame3Icon3 } from './Frame3Icon3';
import { Frame3Icon4 } from './Frame3Icon4';
import { Frame3Icon5 } from './Frame3Icon5';
import { Frame3Icon6 } from './Frame3Icon6';
import { Frame3Icon7 } from './Frame3Icon7';
import { Frame6Icon } from './Frame6Icon';
import { Frame7Icon } from './Frame7Icon';
import classes from './Frame13.module.css';
import { FrameIcon } from './FrameIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { PhoneSquareAltIcon } from './PhoneSquareAltIcon';
import { PlantIcon } from './PlantIcon';
import { ShadowIcon } from './ShadowIcon';
import { SpeechBubbleIcon } from './SpeechBubbleIcon';
import { ThumbsUpIcon } from './ThumbsUpIcon';
import { TwitterSquareIcon } from './TwitterSquareIcon';
import { UserIcon } from './UserIcon';
import { UserTieIcon } from './UserTieIcon';

interface Props {
  className?: string;
  classes?: {
    pearwheal?: string;
    rectangle4?: string;
    rectangle3?: string;
    rectangle2?: string;
    ellipse1?: string;
    _6231ffb3a717a685b0759ecc_Scree?: string;
    frame2?: string;
    getStarted?: string;
    frame3?: string;
    frame32?: string;
    getStarted2?: string;
    frame33?: string;
    frame5?: string;
    getStarted3?: string;
    frame34?: string;
    pearwheelIsTheGatewayToYourRet?: string;
    orderRestockYourInventoryWithE?: string;
    oURCOREVALUES?: string;
    customerCentricCareModelSetToM?: string;
    deliveringValueToCustomersCons?: string;
    operationalExcellence?: string;
    weAreCommittedToGoalsThatGener?: string;
    weStayCuriousAndPursueLearning?: string;
    continuousLearningAndInnovatio?: string;
    weAreCommittedToConductingOurS?: string;
    integrity?: string;
    weAimToBeBecomeACompanyFosteri?: string;
    pearwheelDrivesAnImpactfulEBus?: string;
    aB2BCOMMERCEFINTECHMARKETPLACE?: string;
    frame4?: string;
    backgroundComplete?: string;
    floor?: string;
    _623201ad18993012146edc5f_phone?: string;
    speechBubble?: string;
    character?: string;
    customerCentricity?: string;
    corporateSocialResponsibility?: string;
    excellence1?: string;
    thumbsUp?: string;
    rectangle10?: string;
    oURSERVICES?: string;
    weProvideUniqueServicesToRetai?: string;
    pearPayOffersAnEasyFrictionles?: string;
    aB2BMarketplaceWhereRetailersC?: string;
    pearwheelB2B?: string;
    pearBasketOffersAB2BSubscripti?: string;
    pearPay?: string;
    anInnovativeSolutionWhichAllow?: string;
    check?: string;
    check2?: string;
    check3?: string;
    check4?: string;
    check5?: string;
    check6?: string;
    check7?: string;
    check8?: string;
    offersAnInnovativeServiceLever?: string;
    check9?: string;
    check10?: string;
    check11?: string;
    check12?: string;
    check13?: string;
    check14?: string;
    pearBasket?: string;
    retailersGetAutomatedPreOrdere?: string;
    frame6?: string;
    frame7?: string;
    frame8?: string;
    backgroundComplete2?: string;
    shadow?: string;
    _6232005fdcf62615bb76e338_phone?: string;
    plant?: string;
    character2?: string;
    joinThePearwheelCommunity?: string;
    joinOurcommunityOfTensOfThousa?: string;
    stayUpToDateWithLatestNewsAndT?: string;
    checkOurBlog?: string;
    learnMore?: string;
    frame35?: string;
    rectangle5?: string;
    unsplashGf8e6XvG_3E?: string;
    impactingRetail?: string;
    withJustAFewClicksRetailersGet?: string;
    learnMore2?: string;
    frame36?: string;
    rectangle7?: string;
    unsplashCns0h4ypRyA?: string;
    partneredDistributors?: string;
    distributorsGetIncreasedReachO?: string;
    rectangle9?: string;
    _622b83f59a2e5be462a21cfe_logoF?: string;
    loremIpsumDolorSitAmetConsecte?: string;
    _6231f95870c9bb67a0aaceda_andro?: string;
    _6231f97602da71937393aa93_AppSt?: string;
    stayConnected?: string;
    navigations?: string;
    features?: string;
    _907555101?: string;
    home?: string;
    pearBasket2?: string;
    pearPay2?: string;
    pearWheelB2B?: string;
    aboutUs?: string;
    exams?: string;
    blogs?: string;
    career?: string;
    facebookSquare?: string;
    linkedin?: string;
    twitterSquare?: string;
    michelleRiveraExampleCom?: string;
    phoneSquareAlt?: string;
    envelope?: string;
    line2?: string;
    copyRightCPearwheel2022?: string;
    allRightReserved?: string;
    frame9?: string;
    ellipse5?: string;
    arrowLeft?: string;
    frame10?: string;
    ellipse52?: string;
    arrowLeft2?: string;
    whatOurUsersSayAboutUs?: string;
    rectangle11?: string;
    unsplashOhKElOkQ3RE?: string;
    pearwheelDrivesAnImpactfulEBus2?: string;
    michaelMololuwa?: string;
    rectangle12?: string;
    rectangle13?: string;
    unsplashF1I4IN86NiE?: string;
    unsplashZjnINvfPnig?: string;
    _20thNov2022?: string;
    _20thNov20222?: string;
    expectationsAreRunningHighInAf?: string;
    aRecentReportByCaliforniaBased?: string;
    frame92?: string;
    readMore?: string;
    frame37?: string;
    frame102?: string;
    readMore2?: string;
    frame38?: string;
    _10BenefitsOfAB2BEcommerceWebsi?: string;
    seeAfricaSTop5ECoMmerceStartup?: string;
    fantasticIMTotallyBlownAwayByT?: string;
    rectangle14?: string;
    pOPULARBRANDSONPEARWHEEL?: string;
    _623261b2c98f6681f3b153c2_1200p?: string;
    _623262603148c7821a1f8382_Scree?: string;
    _623262ff458a74685fddc6cf_Scree?: string;
    _6232631815d8db4441f0e7b1_Scree?: string;
    _62326271af68ce5f0306e8f2_Scree?: string;
    innovation1?: string;
    frame?: string;
    rectangle15?: string;
    frame1?: string;
    signUp?: string;
    aboutUs2?: string;
    home2?: string;
    service?: string;
    blog?: string;
    contact?: string;
    _622b599ee4865b004e022804_logo1?: string;
    userTie?: string;
    user?: string;
    frame12?: string;
    macBookPro16?: string;
    screen?: string;
    blue?: string;
    screen2?: string;
    _622b599ee4865b004e022804_logo12?: string;
    aB2BMARKETPLACEFORREATILERSAND?: string;
    orderRestockYourInventoryWithE2?: string;
    frame11?: string;
    rectangle16?: string;
    rectangle17?: string;
    rectangle18?: string;
    tools?: string;
    typeface?: string;
    figma?: string;
    figma2?: string;
    caption_14pt?: string;
    caption_14pt2?: string;
    caption_14pt3?: string;
    caption_14pt4?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    rectangle?: string;
    primary?: string;
    _6E00EE?: string;
    rectangle6?: string;
    secondary?: string;
    _3DAC5?: string;
    _200?: string;
    rectangle8?: string;
    background?: string;
    FFFFFF?: string;
    rectangle19?: string;
    background2?: string;
    FFFFFF2?: string;
  };
}
export const Frame13: FC<Props> = memo(function Frame13(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.pearwheal} ${props.classes?.pearwheal || ''}`}>
        <div className={`${classes.rectangle4} ${props.classes?.rectangle4 || ''}`}></div>
        <div className={`${classes.rectangle3} ${props.classes?.rectangle3 || ''}`}></div>
        <div className={`${classes.rectangle2} ${props.classes?.rectangle2 || ''}`}></div>
        <Ellipse1Icon className={`${classes.ellipse1} ${props.classes?.ellipse1 || ''}`} />
        <div
          className={`${classes._6231ffb3a717a685b0759ecc_Scree} ${
            props.classes?._6231ffb3a717a685b0759ecc_Scree || ''
          }`}
        ></div>
        <div className={`${classes.frame2} ${props.classes?.frame2 || ''}`}>
          <div className={`${classes.getStarted} ${props.classes?.getStarted || ''}`}>Get started</div>
          <Frame3Icon className={`${classes.frame3} ${props.classes?.frame3 || ''}`} />
        </div>
        <div className={`${classes.frame32} ${props.classes?.frame32 || ''}`}>
          <div className={`${classes.getStarted2} ${props.classes?.getStarted2 || ''}`}>Get started</div>
          <Frame3Icon2 className={`${classes.frame33} ${props.classes?.frame33 || ''}`} />
        </div>
        <div className={`${classes.frame5} ${props.classes?.frame5 || ''}`}>
          <div className={`${classes.getStarted3} ${props.classes?.getStarted3 || ''}`}>Get started</div>
          <Frame3Icon3 className={`${classes.frame34} ${props.classes?.frame34 || ''}`} />
        </div>
        <div
          className={`${classes.pearwheelIsTheGatewayToYourRet} ${props.classes?.pearwheelIsTheGatewayToYourRet || ''}`}
        >
          Pearwheel Is The Gateway To Your Retail Business Success. Trusted By Over 5 Thousand Retailers.
        </div>
        <div
          className={`${classes.orderRestockYourInventoryWithE} ${props.classes?.orderRestockYourInventoryWithE || ''}`}
        >
          <span className={classes.labelWrapper}>
            <span className={classes.label}>
              Order, restock your <br />
            </span>
            <span className={classes.label2}>inventory</span>
            <span className={classes.label3}> with ease.</span>
          </span>
        </div>
        <div className={`${classes.oURCOREVALUES} ${props.classes?.oURCOREVALUES || ''}`}>
          OUR CORE
          <br />
          VALUES
        </div>
        <div
          className={`${classes.customerCentricCareModelSetToM} ${props.classes?.customerCentricCareModelSetToM || ''}`}
        >
          Customer centric care model set to meet customer <br />
          needs at every point, embracing feedback loops <br />
          to continuously improve the service to customer <br />
          and ascertain satisfaction.
        </div>
        <div
          className={`${classes.deliveringValueToCustomersCons} ${props.classes?.deliveringValueToCustomersCons || ''}`}
        >
          Delivering value to customers consistently and <br />
          promptly with excellent service in mind.
          <br />
        </div>
        <div className={`${classes.operationalExcellence} ${props.classes?.operationalExcellence || ''}`}>
          Operational Excellence
          <br />
        </div>
        <div
          className={`${classes.weAreCommittedToGoalsThatGener} ${props.classes?.weAreCommittedToGoalsThatGener || ''}`}
        >
          We are committed to goals that generate benefits
          <br />
          for the communities where we operate, providing <br />
          support that leaves a lasting legacy and <br />
          empower the locals.
        </div>
        <div
          className={`${classes.weStayCuriousAndPursueLearning} ${props.classes?.weStayCuriousAndPursueLearning || ''}`}
        >
          We stay curious and pursue learning opportunities, <br />
          focusing on new and creative methods to bring <br />
          trailblazing solutions that facilitate efficient <br />
          service delivery to our customers.
        </div>
        <div
          className={`${classes.continuousLearningAndInnovatio} ${props.classes?.continuousLearningAndInnovatio || ''}`}
        >
          Continuous Learning and Innovation
        </div>
        <div
          className={`${classes.weAreCommittedToConductingOurS} ${props.classes?.weAreCommittedToConductingOurS || ''}`}
        >
          We are committed to conducting our services <br />
          in a manner consistentwith the highest standard <br />
          of integrity, exceeding customer expectations.
        </div>
        <div className={`${classes.integrity} ${props.classes?.integrity || ''}`}>Integrity</div>
        <div
          className={`${classes.weAimToBeBecomeACompanyFosteri} ${props.classes?.weAimToBeBecomeACompanyFosteri || ''}`}
        >
          We aim to be become a company <br />
          fostering the betterment of Africa by <br />
          enabling our true culture of commerce
          <br />
          via tailored technology.
        </div>
        <div
          className={`${classes.pearwheelDrivesAnImpactfulEBus} ${props.classes?.pearwheelDrivesAnImpactfulEBus || ''}`}
        >
          <span className={classes.labelWrapper2}>
            <span className={classes.label4}>
              Pearwheel drives an impactful e-business using AI to connect fast moving <br />
              consumer goods to thousands of retailers and help with distribution while <br />
              providing a seamless{' '}
            </span>
            <span className={classes.label5}>Buy Now Pay Later (BNPL)</span>
            <span className={classes.label6}>
              {' '}
              model for retailers to scale <br />
              their businesses.
              <br />
              <br />
            </span>
            <span className={classes.label7}>
              1<br />
            </span>
            <span className={classes.label8}>
              Our focus is to implement upstream convergence by aligning manufacturers <br />
              with retailers while optimizing integrated off-line and online technologies to <br />
              impact bricks-and-clicks e-markets.​​
              <br />
              <br />
              Restock your store in minutes…
            </span>
          </span>
        </div>
        <div
          className={`${classes.aB2BCOMMERCEFINTECHMARKETPLACE} ${props.classes?.aB2BCOMMERCEFINTECHMARKETPLACE || ''}`}
        >
          <span className={classes.labelWrapper3}>
            <span className={classes.label9}>A B2B </span>
            <span className={classes.label10}>COMMERCE</span>
            <span className={classes.label11}>
              {' '}
              &amp; <br />
            </span>
            <span className={classes.label12}>FINTECH</span>
            <span className={classes.label13}>
              {' '}
              MARKETPLACE
              <br />
            </span>
          </span>
        </div>
        <div className={`${classes.frame4} ${props.classes?.frame4 || ''}`}>
          <BackgroundCompleteIcon
            className={`${classes.backgroundComplete} ${props.classes?.backgroundComplete || ''}`}
          />
          <FloorIcon className={`${classes.floor} ${props.classes?.floor || ''}`} />
          <div
            className={`${classes._623201ad18993012146edc5f_phone} ${
              props.classes?._623201ad18993012146edc5f_phone || ''
            }`}
          ></div>
          <SpeechBubbleIcon className={`${classes.speechBubble} ${props.classes?.speechBubble || ''}`} />
          <CharacterIcon className={`${classes.character} ${props.classes?.character || ''}`} />
        </div>
        <div className={`${classes.customerCentricity} ${props.classes?.customerCentricity || ''}`}>
          Customer Centricity
        </div>
        <div
          className={`${classes.corporateSocialResponsibility} ${props.classes?.corporateSocialResponsibility || ''}`}
        >
          Corporate Social Responsibility
          <br />
        </div>
        <Excellence1Icon className={`${classes.excellence1} ${props.classes?.excellence1 || ''}`} />
        <ThumbsUpIcon className={`${classes.thumbsUp} ${props.classes?.thumbsUp || ''}`} />
        <div className={`${classes.rectangle10} ${props.classes?.rectangle10 || ''}`}></div>
        <div className={`${classes.oURSERVICES} ${props.classes?.oURSERVICES || ''}`}>OUR SERVICES</div>
        <div
          className={`${classes.weProvideUniqueServicesToRetai} ${props.classes?.weProvideUniqueServicesToRetai || ''}`}
        >
          We provide unique services to retailers (local businesses) and distributors, <br />
          helping them grow their businesses and thrive in the FMCG Industry.
        </div>
        <div
          className={`${classes.pearPayOffersAnEasyFrictionles} ${props.classes?.pearPayOffersAnEasyFrictionles || ''}`}
        >
          <span className={classes.labelWrapper4}>
            <span className={classes.label14}>PearPay offers an easy, frictionless and instant </span>
            <span className={classes.label15}>
              Buy Now <br />
              Pay Later (BNPL)
            </span>
            <span className={classes.label16}>
              {' '}
              payment offering to selected retailers.
              <br />
            </span>
          </span>
        </div>
        <div
          className={`${classes.aB2BMarketplaceWhereRetailersC} ${props.classes?.aB2BMarketplaceWhereRetailersC || ''}`}
        >
          A B2B marketplace where retailers can purchase <br />
          products directly from manufacturers.
          <br />
        </div>
        <div className={`${classes.pearwheelB2B} ${props.classes?.pearwheelB2B || ''}`}>Pearwheel B2B</div>
        <div
          className={`${classes.pearBasketOffersAB2BSubscripti} ${props.classes?.pearBasketOffersAB2BSubscripti || ''}`}
        >
          <span className={classes.labelWrapper5}>
            <span className={classes.label17}>
              PearBasket offers a B2B subscription basket service, <br />
              which enables retailers to preorder products from <br />
              different manufacturers using an automated structure.
              <br />
              <br />
            </span>
            <span className={classes.label18}>Points and Rewards</span>
            <span className={classes.label19}>
              <br />
            </span>
          </span>
        </div>
        <div className={`${classes.pearPay} ${props.classes?.pearPay || ''}`}>
          PearPay
          <br />
        </div>
        <div
          className={`${classes.anInnovativeSolutionWhichAllow} ${props.classes?.anInnovativeSolutionWhichAllow || ''}`}
        >
          An innovative solution which allows selected <br />
          retailers to conveniently shop from our partnered <br />
          distributors while enjoying BNPL services and discounts.
          <br />
          <br />
          Enjoy a flexible payment option that allows you to <br />
          get the goods you need to restock and pay in 3 months.
        </div>
        <CheckIcon className={`${classes.check} ${props.classes?.check || ''}`} />
        <CheckIcon2 className={`${classes.check2} ${props.classes?.check2 || ''}`} />
        <CheckIcon3 className={`${classes.check3} ${props.classes?.check3 || ''}`} />
        <CheckIcon4 className={`${classes.check4} ${props.classes?.check4 || ''}`} />
        <CheckIcon5 className={`${classes.check5} ${props.classes?.check5 || ''}`} />
        <CheckIcon6 className={`${classes.check6} ${props.classes?.check6 || ''}`} />
        <CheckIcon7 className={`${classes.check7} ${props.classes?.check7 || ''}`} />
        <CheckIcon8 className={`${classes.check8} ${props.classes?.check8 || ''}`} />
        <div
          className={`${classes.offersAnInnovativeServiceLever} ${props.classes?.offersAnInnovativeServiceLever || ''}`}
        >
          Offers an innovative service leveraging AI to connect <br />
          fast moving consumer goods to thousands of <br />
          retailers and help with distribution.
          <br />
          <br />
          Our B2B solution is fully dedicated to supporting <br />
          local businesses and helping them navigate the <br />
          modern FMCG market.
          <br />
          <br />
          Our digital platform opens multiple channels of <br />
          distributors to retail businesses, restocking their <br />
          shops in one click of a button.
        </div>
        <CheckIcon9 className={`${classes.check9} ${props.classes?.check9 || ''}`} />
        <CheckIcon10 className={`${classes.check10} ${props.classes?.check10 || ''}`} />
        <CheckIcon11 className={`${classes.check11} ${props.classes?.check11 || ''}`} />
        <CheckIcon12 className={`${classes.check12} ${props.classes?.check12 || ''}`} />
        <CheckIcon13 className={`${classes.check13} ${props.classes?.check13 || ''}`} />
        <CheckIcon14 className={`${classes.check14} ${props.classes?.check14 || ''}`} />
        <div className={`${classes.pearBasket} ${props.classes?.pearBasket || ''}`}>
          PearBasket
          <br />
        </div>
        <div
          className={`${classes.retailersGetAutomatedPreOrdere} ${props.classes?.retailersGetAutomatedPreOrdere || ''}`}
        >
          Retailers get automated pre-ordered baskets <br />
          of different products from their choice of distributors <br />
          every month, based on subscription.
          <br />
          <br />
          Offers a Point-based System where subscribed <br />
          retailers gets Reward Points on repeat orders. <br />
          Points are redeemed for retailers to purchase <br />
          more products subsequently.
        </div>
        <Frame6Icon className={`${classes.frame6} ${props.classes?.frame6 || ''}`} />
        <Frame7Icon className={`${classes.frame7} ${props.classes?.frame7 || ''}`} />
        <div className={`${classes.frame8} ${props.classes?.frame8 || ''}`}>
          <BackgroundCompleteIcon2
            className={`${classes.backgroundComplete2} ${props.classes?.backgroundComplete2 || ''}`}
          />
          <ShadowIcon className={`${classes.shadow} ${props.classes?.shadow || ''}`} />
          <div
            className={`${classes._6232005fdcf62615bb76e338_phone} ${
              props.classes?._6232005fdcf62615bb76e338_phone || ''
            }`}
          ></div>
          <PlantIcon className={`${classes.plant} ${props.classes?.plant || ''}`} />
          <CharacterIcon2 className={`${classes.character2} ${props.classes?.character2 || ''}`} />
        </div>
        <div className={`${classes.joinThePearwheelCommunity} ${props.classes?.joinThePearwheelCommunity || ''}`}>
          Join The Pearwheel Community
        </div>
        <div
          className={`${classes.joinOurcommunityOfTensOfThousa} ${props.classes?.joinOurcommunityOfTensOfThousa || ''}`}
        >
          Join ourcommunity of tens of thousands of people who are using Pearwheel to access leading consumer goods{' '}
          <br />
          manufacturers in Africa while restocking their shops/businesses now, to pay later.
        </div>
        <div
          className={`${classes.stayUpToDateWithLatestNewsAndT} ${props.classes?.stayUpToDateWithLatestNewsAndT || ''}`}
        >
          Stay up-to-date with latest news and trends on Pearwheel and our services.
        </div>
        <div className={`${classes.checkOurBlog} ${props.classes?.checkOurBlog || ''}`}>Check Our Blog</div>
        <div className={`${classes.learnMore} ${props.classes?.learnMore || ''}`}>Learn more</div>
        <Frame3Icon4 className={`${classes.frame35} ${props.classes?.frame35 || ''}`} />
        <div className={`${classes.rectangle5} ${props.classes?.rectangle5 || ''}`}></div>
        <div className={`${classes.unsplashGf8e6XvG_3E} ${props.classes?.unsplashGf8e6XvG_3E || ''}`}></div>
        <div className={`${classes.impactingRetail} ${props.classes?.impactingRetail || ''}`}>Impacting Retail</div>
        <div
          className={`${classes.withJustAFewClicksRetailersGet} ${props.classes?.withJustAFewClicksRetailersGet || ''}`}
        >
          With just a few clicks, retailers get their stock at their <br />
          doorstep. We offer convenience, quality and variety. <br />
          Check out what retailers are saying about us...
        </div>
        <div className={`${classes.learnMore2} ${props.classes?.learnMore2 || ''}`}>Learn more</div>
        <Frame3Icon5 className={`${classes.frame36} ${props.classes?.frame36 || ''}`} />
        <div className={`${classes.rectangle7} ${props.classes?.rectangle7 || ''}`}></div>
        <div className={`${classes.unsplashCns0h4ypRyA} ${props.classes?.unsplashCns0h4ypRyA || ''}`}></div>
        <div className={`${classes.partneredDistributors} ${props.classes?.partneredDistributors || ''}`}>
          Partnered Distributors
        </div>
        <div
          className={`${classes.distributorsGetIncreasedReachO} ${props.classes?.distributorsGetIncreasedReachO || ''}`}
        >
          Distributors get increased reach, opportunities to <br />
          connect with retailers and availability to end users. <br />
          Check out partner manufacturers and distributors.
        </div>
        <div className={`${classes.rectangle9} ${props.classes?.rectangle9 || ''}`}></div>
        <div
          className={`${classes._622b83f59a2e5be462a21cfe_logoF} ${
            props.classes?._622b83f59a2e5be462a21cfe_logoF || ''
          }`}
        ></div>
        <div
          className={`${classes.loremIpsumDolorSitAmetConsecte} ${props.classes?.loremIpsumDolorSitAmetConsecte || ''}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit diam dui vitae pellentesque. Ullamcorper id non
          tortor maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit diam dui vitae{' '}
        </div>
        <div
          className={`${classes._6231f95870c9bb67a0aaceda_andro} ${
            props.classes?._6231f95870c9bb67a0aaceda_andro || ''
          }`}
        ></div>
        <div
          className={`${classes._6231f97602da71937393aa93_AppSt} ${
            props.classes?._6231f97602da71937393aa93_AppSt || ''
          }`}
        ></div>
        <div className={`${classes.stayConnected} ${props.classes?.stayConnected || ''}`}>Stay Connected</div>
        <div className={`${classes.navigations} ${props.classes?.navigations || ''}`}>Navigations</div>
        <div className={`${classes.features} ${props.classes?.features || ''}`}>Features</div>
        <div className={`${classes._907555101} ${props.classes?._907555101 || ''}`}>(907) 555-0101</div>
        <div className={`${classes.home} ${props.classes?.home || ''}`}>Home</div>
        <div className={`${classes.pearBasket2} ${props.classes?.pearBasket2 || ''}`}>PearBasket</div>
        <div className={`${classes.pearPay2} ${props.classes?.pearPay2 || ''}`}>PearPay</div>
        <div className={`${classes.pearWheelB2B} ${props.classes?.pearWheelB2B || ''}`}>PearWheel B2B</div>
        <div className={`${classes.aboutUs} ${props.classes?.aboutUs || ''}`}>About us</div>
        <div className={`${classes.exams} ${props.classes?.exams || ''}`}>Exams</div>
        <div className={`${classes.blogs} ${props.classes?.blogs || ''}`}>Blogs</div>
        <div className={`${classes.career} ${props.classes?.career || ''}`}>Career</div>
        <FacebookSquareIcon className={`${classes.facebookSquare} ${props.classes?.facebookSquare || ''}`} />
        <LinkedinIcon className={`${classes.linkedin} ${props.classes?.linkedin || ''}`} />
        <TwitterSquareIcon className={`${classes.twitterSquare} ${props.classes?.twitterSquare || ''}`} />
        <div className={`${classes.michelleRiveraExampleCom} ${props.classes?.michelleRiveraExampleCom || ''}`}>
          michelle.rivera@example.com
        </div>
        <PhoneSquareAltIcon className={`${classes.phoneSquareAlt} ${props.classes?.phoneSquareAlt || ''}`} />
        <EnvelopeIcon className={`${classes.envelope} ${props.classes?.envelope || ''}`} />
        <div className={`${classes.line2} ${props.classes?.line2 || ''}`}></div>
        <div className={`${classes.copyRightCPearwheel2022} ${props.classes?.copyRightCPearwheel2022 || ''}`}>
          <span className={classes.labelWrapper6}>
            <span className={classes.label20}>CopyRight (c)</span>
            <span className={classes.label21}>Pearwheel 2022</span>
          </span>
        </div>
        <div className={`${classes.allRightReserved} ${props.classes?.allRightReserved || ''}`}>All right reserved</div>
        <div className={`${classes.frame9} ${props.classes?.frame9 || ''}`}>
          <Ellipse5Icon className={`${classes.ellipse5} ${props.classes?.ellipse5 || ''}`} />
          <ArrowLeftIcon className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ''}`} />
        </div>
        <div className={`${classes.frame10} ${props.classes?.frame10 || ''}`}>
          <Ellipse5Icon2 className={`${classes.ellipse52} ${props.classes?.ellipse52 || ''}`} />
          <ArrowLeftIcon2 className={`${classes.arrowLeft2} ${props.classes?.arrowLeft2 || ''}`} />
        </div>
        <div className={`${classes.whatOurUsersSayAboutUs} ${props.classes?.whatOurUsersSayAboutUs || ''}`}>
          What our users say about us
        </div>
        <div className={`${classes.rectangle11} ${props.classes?.rectangle11 || ''}`}></div>
        <div className={`${classes.unsplashOhKElOkQ3RE} ${props.classes?.unsplashOhKElOkQ3RE || ''}`}></div>
        <div
          className={`${classes.pearwheelDrivesAnImpactfulEBus2} ${
            props.classes?.pearwheelDrivesAnImpactfulEBus2 || ''
          }`}
        >
          Pearwheel drives an impactful e-business using AI to connect fast moving consumer goods to thousands of
          retailers and help with distribution while providing a seamless Buy Now Pay Later (BNPL) model for retailers
          to scale their businesses. Kudos to the Pearwheel team.
        </div>
        <div className={`${classes.michaelMololuwa} ${props.classes?.michaelMololuwa || ''}`}>Michael Mololuwa</div>
        <div className={`${classes.rectangle12} ${props.classes?.rectangle12 || ''}`}></div>
        <div className={`${classes.rectangle13} ${props.classes?.rectangle13 || ''}`}></div>
        <div className={`${classes.unsplashF1I4IN86NiE} ${props.classes?.unsplashF1I4IN86NiE || ''}`}></div>
        <div className={`${classes.unsplashZjnINvfPnig} ${props.classes?.unsplashZjnINvfPnig || ''}`}></div>
        <div className={`${classes._20thNov2022} ${props.classes?._20thNov2022 || ''}`}>20th Nov, 2022</div>
        <div className={`${classes._20thNov20222} ${props.classes?._20thNov20222 || ''}`}>20th Nov, 2022</div>
        <div
          className={`${classes.expectationsAreRunningHighInAf} ${props.classes?.expectationsAreRunningHighInAf || ''}`}
        >
          Expectations are running high in Africa that e-commerce can be a source of accelerated economic growth,
          offering opportunities to firms small and large and promoting...........
        </div>
        <div
          className={`${classes.aRecentReportByCaliforniaBased} ${props.classes?.aRecentReportByCaliforniaBased || ''}`}
        >
          A recent report by California-based mobile marketing analytics firm, AppsFlyer, has shown that e-commerce in
          Sub-Saharan Africa is witnessing.....
        </div>
        <div className={`${classes.frame92} ${props.classes?.frame92 || ''}`}>
          <div className={`${classes.readMore} ${props.classes?.readMore || ''}`}>Read more</div>
          <Frame3Icon6 className={`${classes.frame37} ${props.classes?.frame37 || ''}`} />
        </div>
        <div className={`${classes.frame102} ${props.classes?.frame102 || ''}`}>
          <div className={`${classes.readMore2} ${props.classes?.readMore2 || ''}`}>Read more</div>
          <Frame3Icon7 className={`${classes.frame38} ${props.classes?.frame38 || ''}`} />
        </div>
        <div
          className={`${classes._10BenefitsOfAB2BEcommerceWebsi} ${
            props.classes?._10BenefitsOfAB2BEcommerceWebsi || ''
          }`}
        >
          10 benefits of a B2B <br />
          ecommerce website
        </div>
        <div
          className={`${classes.seeAfricaSTop5ECoMmerceStartup} ${props.classes?.seeAfricaSTop5ECoMmerceStartup || ''}`}
        >
          See Africa&#39;s top 5 e-co
          <br />
          mmerce startups in 2021
        </div>
        <div
          className={`${classes.fantasticIMTotallyBlownAwayByT} ${props.classes?.fantasticIMTotallyBlownAwayByT || ''}`}
        >
          Fantastic, I&#39;m totally blown away by the Pearwheel app
          <br />
        </div>
        <div className={`${classes.rectangle14} ${props.classes?.rectangle14 || ''}`}></div>
        <div className={`${classes.pOPULARBRANDSONPEARWHEEL} ${props.classes?.pOPULARBRANDSONPEARWHEEL || ''}`}>
          POPULAR BRANDS ON PEARWHEEL
        </div>
        <div
          className={`${classes._623261b2c98f6681f3b153c2_1200p} ${
            props.classes?._623261b2c98f6681f3b153c2_1200p || ''
          }`}
        ></div>
        <div
          className={`${classes._623262603148c7821a1f8382_Scree} ${
            props.classes?._623262603148c7821a1f8382_Scree || ''
          }`}
        ></div>
        <div
          className={`${classes._623262ff458a74685fddc6cf_Scree} ${
            props.classes?._623262ff458a74685fddc6cf_Scree || ''
          }`}
        ></div>
        <div
          className={`${classes._6232631815d8db4441f0e7b1_Scree} ${
            props.classes?._6232631815d8db4441f0e7b1_Scree || ''
          }`}
        ></div>
        <div
          className={`${classes._62326271af68ce5f0306e8f2_Scree} ${
            props.classes?._62326271af68ce5f0306e8f2_Scree || ''
          }`}
        ></div>
        <div className={`${classes.innovation1} ${props.classes?.innovation1 || ''}`}>
          <FrameIcon className={`${classes.frame} ${props.classes?.frame || ''}`} />
        </div>
        <div className={`${classes.rectangle15} ${props.classes?.rectangle15 || ''}`}></div>
        <div className={`${classes.frame1} ${props.classes?.frame1 || ''}`}>
          <div className={`${classes.signUp} ${props.classes?.signUp || ''}`}>Sign up</div>
        </div>
        <div className={`${classes.aboutUs2} ${props.classes?.aboutUs2 || ''}`}>About us</div>
        <div className={`${classes.home2} ${props.classes?.home2 || ''}`}>Home</div>
        <div className={`${classes.service} ${props.classes?.service || ''}`}>Service</div>
        <div className={`${classes.blog} ${props.classes?.blog || ''}`}>Blog</div>
        <div className={`${classes.contact} ${props.classes?.contact || ''}`}>Contact</div>
        <div
          className={`${classes._622b599ee4865b004e022804_logo1} ${
            props.classes?._622b599ee4865b004e022804_logo1 || ''
          }`}
        ></div>
        <UserTieIcon className={`${classes.userTie} ${props.classes?.userTie || ''}`} />
        <UserIcon className={`${classes.user} ${props.classes?.user || ''}`} />
      </div>
      <div className={`${classes.frame12} ${props.classes?.frame12 || ''}`}>
        <div className={`${classes.macBookPro16} ${props.classes?.macBookPro16 || ''}`}></div>
        <div className={`${classes.screen} ${props.classes?.screen || ''}`}></div>
        <div className={`${classes.blue} ${props.classes?.blue || ''}`}></div>
        <div className={`${classes.screen2} ${props.classes?.screen2 || ''}`}></div>
        <div
          className={`${classes._622b599ee4865b004e022804_logo12} ${
            props.classes?._622b599ee4865b004e022804_logo12 || ''
          }`}
        ></div>
        <div
          className={`${classes.aB2BMARKETPLACEFORREATILERSAND} ${props.classes?.aB2BMARKETPLACEFORREATILERSAND || ''}`}
        >
          A B2B MARKET PLACE FOR REATILERS AND WHOLESALERS
        </div>
        <div
          className={`${classes.orderRestockYourInventoryWithE2} ${
            props.classes?.orderRestockYourInventoryWithE2 || ''
          }`}
        >
          <span className={classes.labelWrapper7}>
            <span className={classes.label22}>Order, restock your </span>
            <span className={classes.label23}>inventory</span>
            <span className={classes.label24}> with ease.</span>
          </span>
        </div>
      </div>
      <div className={`${classes.frame11} ${props.classes?.frame11 || ''}`}>
        <div className={`${classes.rectangle16} ${props.classes?.rectangle16 || ''}`}></div>
        <div className={`${classes.rectangle17} ${props.classes?.rectangle17 || ''}`}></div>
        <div className={`${classes.rectangle18} ${props.classes?.rectangle18 || ''}`}></div>
        <div className={`${classes.tools} ${props.classes?.tools || ''}`}>Tools</div>
        <div className={`${classes.typeface} ${props.classes?.typeface || ''}`}>Typeface</div>
        <div className={`${classes.figma} ${props.classes?.figma || ''}`}>Figma</div>
        <FigmaIcon className={`${classes.figma2} ${props.classes?.figma2 || ''}`} />
        <div className={`${classes.caption_14pt} ${props.classes?.caption_14pt || ''}`}>Headline 3</div>
        <div className={`${classes.caption_14pt2} ${props.classes?.caption_14pt2 || ''}`}>Headline 5</div>
        <div className={`${classes.caption_14pt3} ${props.classes?.caption_14pt3 || ''}`}>Headline 4</div>
        <div className={`${classes.caption_14pt4} ${props.classes?.caption_14pt4 || ''}`}>Headline 6</div>
        <div className={`${classes.h3} ${props.classes?.h3 || ''}`}>H3/Poppins/Regular/48px</div>
        <div className={`${classes.h4} ${props.classes?.h4 || ''}`}>H4/Poppins/Regular/34px</div>
        <div className={`${classes.h5} ${props.classes?.h5 || ''}`}>H5/Poppins/Regular/24px</div>
        <div className={`${classes.h6} ${props.classes?.h6 || ''}`}>H6/Poppins/Medium/20px</div>
        <div className={`${classes.rectangle} ${props.classes?.rectangle || ''}`}></div>
        <div className={`${classes.primary} ${props.classes?.primary || ''}`}>Primary </div>
        <div className={`${classes._6E00EE} ${props.classes?._6E00EE || ''}`}>#EDA61E</div>
        <div className={`${classes.rectangle6} ${props.classes?.rectangle6 || ''}`}></div>
        <div className={`${classes.secondary} ${props.classes?.secondary || ''}`}>Secondary</div>
        <div className={`${classes._3DAC5} ${props.classes?._3DAC5 || ''}`}>#03DAC5</div>
        <div className={`${classes._200} ${props.classes?._200 || ''}`}>200</div>
        <div className={`${classes.rectangle8} ${props.classes?.rectangle8 || ''}`}></div>
        <div className={`${classes.background} ${props.classes?.background || ''}`}>Background</div>
        <div className={`${classes.FFFFFF} ${props.classes?.FFFFFF || ''}`}>#FFFFFF</div>
        <div className={`${classes.rectangle19} ${props.classes?.rectangle19 || ''}`}></div>
        <div className={`${classes.background2} ${props.classes?.background2 || ''}`}>Background</div>
        <div className={`${classes.FFFFFF2} ${props.classes?.FFFFFF2 || ''}`}>#FFFBEF</div>
      </div>
    </div>
  );
});
