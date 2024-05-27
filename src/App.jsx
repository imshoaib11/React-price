import React from 'react'

function App() {
  let data = [
    {
      planName: "Free",
      price: "$0",
      users: "Single User",
      storage: "5 GB Storage",
      domain: "Free Subdomain", 
      privateProjects: false,
      supportEnabler: false,
      domainEnabler: false,
      statusEnabler: false
    },  
    {
      planName: "Plus",
      price: "$9",
      users: "5 users",
      storage: "50 GB Storage",
      domain: "Free Subdomain",
      privateProjects: true,
      supportEnabler: true,
      domainEnabler: true,
      statusEnabler: false
    }, 
    {
      planName: "Pro",
      price: "$49",
      users: "Unlimited users",
      storage: "150 GB Storage",
      domain: "Free Subdomain",
      privateProjects: true,
      supportEnabler: true,
      domainEnabler: true,
      statusEnabler: true
    }   
  ]

  return <>
      {/* !-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i) => {
           return <Card data = {e}/>
        })
      }
    </div>
  </div>
</section>
  
  </>
  
}

export default App

function Card(props){
return  <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.data.planName}</h5>
      <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.planName=="Plus" || props.data.planName=="Pro"?<strong>{props.data.users}</strong>:props.data.users}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>  
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
        <li className={props.data.privateProjects?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjects?"fas fa-check":"fas fa-times"}></i></span>Unlimited Private Projects
         </li>
        <li className={props.data.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>Dedicated Phone Support</li>
        <li className={props.data.domainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.planName=="Pro"?<strong>Unlimited </strong>:<></>}{props.data.domain}
        </li>
        <li className={props.data.statusEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.statusEnabler?"fas fa-check":"fas fa-times"}></i></span>Monthly Status
          Reports</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}