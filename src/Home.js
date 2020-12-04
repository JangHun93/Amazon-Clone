import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="12345"
						title="[GIGABYTE] GeForce RTX 3080 AORUS Xtreme D6X 10GB"
						price={999.99}
						image="http://image3.compuzone.co.kr/img/product_img/2020/1118/733620/733620_600.jpg"
						rating={5}
					/>
					<Product
						id="1235"
						title="[ASUS] GeForce RTX 3080 ROG STRIX O10G GAMING OC D6X 10GB"
						price={999.99}
						image="https://www.asus.com/media/global/products/zrhjrntq3glfuxyd/P_setting_fff_1_90_end_600.png"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="1236"
						title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
						price={999.99}
						image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UL640_FMwebp_QL65_.jpg"
						rating={4}
					/>
					<Product
						id="1237"
						title="EVGA NVIDIA GeForce RTX 3080 FTW3 Ultra Gaming Graphics Card, 10GB GDDR6X, VR Ready, PCIe 4.0, iCX3 Technology, ARGB LED, Metal Backplate w/ Forza Horizon 3"
						price={1709.99}
						image="https://m.media-amazon.com/images/I/71kVFZ16x4L._AC_UY436_FMwebp_QL65_.jpg"
						rating={4}
					/>
					<Product
						id="1238"
						title="ASUS TUF Gaming NVIDIA GeForce RTX 3090 OC Edition Graphics Card (PCIe 4.0, 24GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, Dual Ball Fan Bearings, Military-Grade Certification, GPU Tweak II)"
						price={1599.99}
						image="https://m.media-amazon.com/images/I/81XHNWut5WL._AC_UY436_FMwebp_QL65_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="1239"
						title="Intel Core i9-9980XE Extreme Edition Processor 18 Cores up to 4.4GHz Turbo Unlocked LGA2066 X299 Series 165W Processors (999AD1)"
						price={1054.51}
						image="https://m.media-amazon.com/images/I/71Qsjp8X2hL._AC_UY436_FMwebp_QL65_.jpg"
						rating={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
