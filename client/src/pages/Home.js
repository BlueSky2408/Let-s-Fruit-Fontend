import React from "react";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Categories from '../components/Category/Categories'
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
import ProductSection from "../components/HomePage/ProductSection";
import FeatureList from '../components/FeatureList/FeatureList'
import AboutUs from '../components/AboutUs/AboutUs'
import Bubble from '../components/Bubble/Bubble'
import { ProductList } from '../components/ProductList/ProductList'


const Home = () => {
    return (
        <>
            <Loader />
            <Navbar />
            <HeroBanner />
            <AboutUs />
            <FeatureList />
            <Categories />
            <Bubble />
            <ProductList
                products={[
                    {
                        id: 1,
                        name: "",
                        price: 0,
                        image: "",
                    }
                ]}
            />
            <Map />
            <Footer />
        </>
    )
}

export default Home
