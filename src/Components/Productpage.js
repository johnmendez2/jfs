import React,{useState, useEffect} from 'react'
import {Navbar} from './Navbar'
import { auth,fs } from '../Config/config';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';
import ImageGallery from 'react-image-gallery';
import { Helmet, HelmetProvider  } from 'react-helmet-async';
export default function Productpage(product){
    function GetUserUid(){
        const [uid, setUid]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    setUid(user.uid);
                }
            })
        },[])
        return uid;
    }

    

    const uid = GetUserUid();

    // getting current user function
    function GetCurrentUser(){
        const [user, setUser]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().Name);
                    })
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();

    // state of totalProducts
    const [totalProducts, setTotalProducts]=useState(0);
    // getting cart products   


    const location = useLocation();
    const urlId = location.pathname.split('-')[0].split('/').pop();
console.log(urlId);


    async function getProd() {
        try {
          const docRef = fs.collection("Products").doc(urlId);
          const doc = await docRef.get();
          if (doc.exists) {
            const a = doc.data();
            setProduct(a);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log("Error getting document:", error);
        }
      }
    const[prod, setProduct] = useState('');

    useEffect(()=>{        
        getProd();
    },[])  
    useEffect(()=>{
        console.log(prod)
    }, [prod])

    const history = useNavigate();
    let Product;


    function ShowImg(){
        if (prod.url2 ==""){
            return(<img className='prodimg'src={prod.url} alt="product-img"/>)
        }else{
            const images = [
                {
                  original: prod.url,
                  thumbnail: prod.url,
                },
                {
                  original: prod.url2,
                  thumbnail: prod.url2,
                },

              ];
              return <ImageGallery items={images} />;
        }
    }


    
    const [Text, setText] = useState("BUY VIA DEPOP");
    return (
        <HelmetProvider>
            <div>
            <Helmet>
        <meta property="og:title" content={prod.title} />
        <meta property="og:description" content={prod.description} />
        <meta property="og:image" content={prod.img} />
        <meta property="og:url" content={`https://johnsfootballshirts.com/${urlId}`} />
        <meta name="geography" content="United Arab Emirates, UAE" />
        <meta name="country" content="UAE, United Arab Emirates, Arab Emirates" />
        <meta name="language" content="English" />
      </Helmet>
          <Navbar user={user} totalProducts={totalProducts} />
          <div className='productsbox'>
            <div className='productPrev'>
              <ShowImg />
            </div>
            <div className='productData'>
              <h1 className='title'>{prod.title}</h1>
              <h2 className='size'>Size: {prod.size}</h2>
              <div className='btn btn-danger prodbtn' onClick={() => window.open(prod.depopURL)}>
                {Text}
              </div>
              <h1 className='price'>AED{prod.price}</h1>
              <p className='desc'>{prod.description}</p>
            </div>
          </div>
        </div>
        </HelmetProvider>
        
      );
}