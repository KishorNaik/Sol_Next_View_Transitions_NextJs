"use client";
import { Link, useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '../_lib';

const Home = () => {

    const router = useTransitionRouter();

    return (
        <>
        <div className="w-100 h-100 bg-blue-500">
            <h3>
                <span>Home</span>
            </h3>
            <p>
                
                <Link href='/aboutus'>Go to About us Page : Link Components</Link>
                
            </p>
            <p>
                <a onClick={(e) => {
                        e.preventDefault()
                        router.push('/aboutus', {
                        // Optional custom transition
                        onTransitionReady: slideInOut,
                        })
                     }}
                     >
                        Go to About us Page : A tag
                 </a>
            </p>
        </div>
        </>
    );
};



export default Home;