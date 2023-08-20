import React from 'react'
// import './Subscription.css'
import './SubscriptionTwo.css'
import SubsNubbar from './SubsNubbar';
const Subscription = () => {


    const handleClick = () => {
      // Navigate to the desired link
      window.open('https://mercury-uat.phonepe.com/transact/simulator?token=iLGhlIP2m4gB8YLZGnF3polH4CFf2S3yOpLFnGEZPw', '_blank');
    };

    
    return (
        <>
        <SubsNubbar></SubsNubbar>
      <div id='subscription'>
        <div className='wraper'>

            {/* card one  */}
            <div className='SupCard movers'>
                <h3 className='packagename'>Movers & Packers</h3>
                <h1 className="pricepackage">$ 12000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Professional Team</li>
                    <li>Comprehensive Packing</li>
                    <li>Safe Transportation</li>
                    <li>Local and Long-Distance</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

                  {/* card two  */}
                  <div className='SupCard storage'>
                <h3 className='packagename'>Storage</h3>
                <h1 className="pricepackage">$ 40000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Luxurious Solutions</li>
                    <li>Customizable Spaces</li>
                    <li>Secure and Private</li>
                    <li>VIP Access</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

                  {/* card three  */}
                  <div className='SupCard courier'>
                <h3 className='packagename'>Courier</h3>
                <h1 className="pricepackage">$ 82000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Express Delivery</li>
                    <li>Nationwide Coverage</li>
                    <li>Secure Handling</li>
                    <li>Nationwide Coverage</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>
                  {/* card four  */}
                  <div className='SupCard movers'>
                <h3 className='packagename'>Vehicle Transport</h3>
                <h1 className="pricepackage">$ 879000</h1>
                <ul style={{paddingLeft:0}}>
                    <li>Safe and Secure Transport</li>
                    <li>Door-to-Door Service</li>
                    <li>Open Transport Solutions</li>
                    <li>Experienced Drivers</li>
                </ul>
                <button onClick={handleClick} className="subButton">Purchase</button>
            </div>

        </div>
      </div>
      </>
    )
}

export default Subscription