
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.jpeg'
import {BsChevronDown} from 'react-icons/bs'

const SideBar = ({

}) => {
    const [showSubs, setShowSubs] = useState(null)
    const location = useLocation()
    let routes = [
        
                {
                    name: 'accounts',
                    icon: '',
                    subParts: [
                            {
                                url: '/accounts/auth/apple/',
                                name: 'AuthApple'
                            }
                            ,
                            {
                                url: '/accounts/auth/facebook/',
                                name: 'AuthFacebook'
                            }
                            ,
                            {
                                url: '/accounts/auth/google/',
                                name: 'AuthGoogle'
                            }
                            ,
                            {
                                url: '/accounts/charge-wallet/',
                                name: 'ChargeWallet'
                            }
                            ,
                            {
                                url: '/accounts/login/',
                                name: 'Login'
                            }
                            ,
                            {
                                url: '/accounts/otp/',
                                name: 'Otp'
                            }
                            ,
                            {
                                url: '/accounts/passport-issure/',
                                name: 'PassportIssure'
                            }
                            ,
                            {
                                url: '/accounts/profile/',
                                name: 'Profile'
                            }
                            ,
                            {
                                url: '/accounts/register/',
                                name: 'Register'
                            }
                            ,
                            {
                                url: '/accounts/social-app/',
                                name: 'SocialApp'
                            }
                            ,
                            {
                                url: '/accounts/user-information/',
                                name: 'UserInformation'
                            }
                            ]
                },
                ,
                {
                    name: 'base',
                    icon: '',
                    subParts: [
                            {
                                url: '/base/about_us/',
                                name: 'About_us'
                            }
                            ,
                            {
                                url: '/base/addresses/',
                                name: 'Addresses'
                            }
                            ,
                            {
                                url: '/base/cities/',
                                name: 'Cities'
                            }
                            ,
                            {
                                url: '/base/competitive-advantages/',
                                name: 'CompetitiveAdvantages'
                            }
                            ,
                            {
                                url: '/base/contact_us/detail/',
                                name: 'Contact_usDetail'
                            }
                            ,
                            {
                                url: '/base/contact_us/form/',
                                name: 'Contact_usForm'
                            }
                            ,
                            {
                                url: '/base/countries/',
                                name: 'Countries'
                            }
                            ,
                            {
                                url: '/base/faq/',
                                name: 'Faq'
                            }
                            ,
                            {
                                url: '/base/footer/',
                                name: 'Footer'
                            }
                            ,
                            {
                                url: '/base/home-page-details/',
                                name: 'HomePageDetails'
                            }
                            ,
                            {
                                url: '/base/home-page-icons/',
                                name: 'HomePageIcons'
                            }
                            ,
                            {
                                url: '/base/menus/',
                                name: 'Menus'
                            }
                            ,
                            {
                                url: '/base/slider/',
                                name: 'Slider'
                            }
                            ,
                            {
                                url: '/base/states/',
                                name: 'States'
                            }
                            ,
                            {
                                url: '/base/terms-and-conditions/',
                                name: 'TermsAndConditions'
                            }
                            ]
                },
                ,
                {
                    name: 'blog',
                    icon: '',
                    subParts: [
                            {
                                url: '/blog/comments/',
                                name: 'Comments'
                            }
                            ,
                            {
                                url: '/blog/post_categories/',
                                name: 'Post_categories'
                            }
                            ,
                            {
                                url: '/blog/posts/',
                                name: 'Posts'
                            }
                            ]
                },
                ,
                {
                    name: 'newsletters',
                    icon: '',
                    subParts: [
                            {
                                url: '/newsletters/register/',
                                name: 'Register'
                            }
                            ]
                },
                ,
                {
                    name: 'order',
                    icon: '',
                    subParts: [
                            {
                                url: '/order/tour/',
                                name: 'Tour'
                            }
                            ]
                },
                ,
                {
                    name: 'payments',
                    icon: '',
                    subParts: [
                            {
                                url: '/payments/payment/',
                                name: 'Payment'
                            }
                            ]
                },
                ,
                {
                    name: 'tour',
                    icon: '',
                    subParts: [
                            {
                                url: '/tour/additional-features/',
                                name: 'AdditionalFeatures'
                            }
                            ,
                            {
                                url: '/tour/airplanes/',
                                name: 'Airplanes'
                            }
                            ,
                            {
                                url: '/tour/locations/',
                                name: 'Locations'
                            }
                            ,
                            {
                                url: '/tour/prices/',
                                name: 'Prices'
                            }
                            ,
                            {
                                url: '/tour/tours/',
                                name: 'Tours'
                            }
                            ,
                            {
                                url: '/tour/user-requested/',
                                name: 'UserRequested'
                            }
                            ]
                },
                
    ]
    return (
        <div className="w-72 flex flex-col items-center m-2">
        <img src={logo} className="mt-10 mb-4 rounded-full shadow-lg" />
        {
                routes.map(item => (
                    <div className="flex flex-col w-full bg-mainColor p-2 rounded-xl shadow-lg my-2">
                    <div className="flex items-center justify-between cursor-pointer text-white" onClick={() => showSubs == item.name ? setShowSubs(null) : setShowSubs(item.name)}>
                    <p>{item.icon}</p>
                    <p>{item.name}</p>
                    <p className={showSubs == item.name ? 'rotate-180 mx-2' : 'mx-2'}><BsChevronDown /></p>
                    </div>
                    {
                        showSubs == item.name &&
                        item.subParts?.map(subItem => (
                            <Link to={subItem.url}
                                className={'w-full p-2 rounded-xl shadow-lg text-white my-1 ' + (location.pathname == subItem.url ? 'bg-black' : ' bg-secondaryColor')}
                            >
                            <p>{subItem.name}</p>
                            </Link>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    )
}

export default SideBar
