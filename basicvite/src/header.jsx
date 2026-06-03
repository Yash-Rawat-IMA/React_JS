export default function Header(){
    return(
        <div style={
            {
                display: "flex",
                displayDirection: "coloumn",
                backgroundColor:"white",
                margin:"0px",
                padding:"0px",
                color:"black",
                fontSize:"large",
                fontWeight:"bold"
            }
        }>

        
        <header>

        <ul style={{
            listStyle:"none",
            // fontSize:"larger",
            fontWeight:"bolder",
            display:"flex",
            displayDirection:"coloumn",
            padding:"5px",
            hover:{
                color:"red"
            }
        }}>
            <li style={{
                padding:"3px",
                color:"red",
                marginRight:"30px",
                marginLeft:"10px",
                fontSize:"30px",
                fontWeight:"bolder",
                cursor:"pointer"  
            }}>AVIS</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",

            }}>Book</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",

            }}>Manage Booking</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",

            }}>Buisness Rentals</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",

            }}>AVIS Preferred</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",
                border:"2px solid red",
                borderRadius:"10px",
                padding:"5px"
            }}>DEALS</li>
            <li style={{
                margin: "2px",
                marginBottom:"5px",
                marginTop:"20px",
                marginRight:"20px",
                cursor:"pointer",
                fontSize:"small",
                fontWeight:"bolder",

            }}>EN</li>
            <li style={{
                marginRight:"0px",
                marginLeft:"410px",
                cursor:"pointer"
            }}>Sign In or Join In</li>
        </ul>
        </header>
        </div>
    )
}