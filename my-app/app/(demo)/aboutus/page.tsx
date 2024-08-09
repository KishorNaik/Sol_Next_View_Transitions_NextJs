"use client";
import { Link, useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '../_lib';

const AboutUs = () => {

    const router = useTransitionRouter();

    return (
        <>
        <div className="w-100 h-100 bg-blue-500">
            <h3>
                <span>About us</span>
            </h3>
            <p>
                <Link href='/home'>Go to Home Page : Link Components</Link>
            </p>

            <p>
                <a onClick={(e) => {
                        e.preventDefault()
                        router.push('/home', {
                        // Optional custom transition
                        onTransitionReady: slideInOut,
                        })
                     }}
                     >
                        Go to Home Page : A tag
                 </a>
            </p>
        </div>
        </>
    );
};

export default AboutUs;