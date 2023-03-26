import { Navbar } from "./Navbar"
import React,{useState, useEffect} from 'react'
import  Products  from './Products'
import { auth,fs } from '../Config/config';
import { useNavigate } from 'react-router-dom';
import { IndividualFilteredProduct } from './IndividualFilteredProducts';
import '../index.css';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export const FAQ = () => {
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

    return(
        <div>
            <Navbar></Navbar>

            <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={0} style={{padding:'5%'}}>
        <MDBAccordionItem collapseId={1} headerTitle="Are the shirts listed on the website authentic?">
          Every shirt listed on the website is 100% authentic, for any more questions or
          authenticity checks please connect with us on instagram at <a href="https://www.instagram.com/johnsfootballshirts/">@johnsfootballshirts</a>.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Do you ship anywhere in the UAE?">
          Yes we ship all over the UAE for a flat 25 AED shipping fee. All 
          orders over 200 AED avail free domestic shipping!
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="How do I receive my order?">
          All orders will be shipped out within two days of purchase and will be delivered within
          2-3 business days.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="How do I know if I won a giveaway?">
          Winners of our Instagram giveaways will be contacted through the Instagram app directly.
          If you would like to enter future giveaways follow <a href="https://www.instagram.com/johnsfootballshirts/">@johnsfootballshirts</a> so that
          you don't miss out!
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Where do I find the best football shirt community in the UAE?">
          Follow us on <a href="https://www.instagram.com/johnsfootballshirts/">@johnsfootballshirts</a> to be a part of our active
          and beautiful football shirt community where we share football news, shirt releases, our personal collection and much more!
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
        </div>
    )
}