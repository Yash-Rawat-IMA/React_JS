export default function Search() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div
      style={{
        border: "2px solid grey",
        borderRadius: "20px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "white",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <form action={search}>
        <label
          htmlFor="pickUp"
          style={{
            padding: "20px",
            margin: "20px",
            color: "black",
            fontSize: "larger",
            fontWeight: "bolder",
          }}
        >
          PICK-UP LOCATION
        </label>
        <br />
        <input
          name="pickup"
          placeholder="Enter your pick-up location or delivery Address"
          style={{
            border: "2px solid grey",
            borderRadius: "20px",
            color: "grey",
            backgroundColor: "whitesmoke",
            padding: "35px",
            margin: "20px",
          }}
        />
        <br />
        <div style={{
          display:"flex",
          displayDirection:"coloumn",
          
        }}>
          <div>
            <label
              htmlFor="pickDateTime"
              style={{
                padding: "30px",
                margin: "30px",
                fontSize: "larger",
                fontWeight: "bolder",
              }}
            >
              PICK-UP DATE & TIME
            </label>
            <br />

            <input type="date" name="date" id="date" placeholder="Enter Date" />
            <input type="time" name="time" id="time" placeholder="Enter Time" />
          </div>

          <div>
            <label
              htmlFor="pickDateTime"
              style={{
                padding: "30px",
                margin: "30px",
                fontSize: "larger",
                fontWeight: "bolder",
              }}
            >
              PICK-UP DATE & TIME
            </label>
            <br />

            <input type="date" name="date" id="date" placeholder="Enter Date" />
            <input type="time" name="time" id="time" placeholder="Enter Time" />
          </div>
        </div>
        <div
          style={{
            border: "5px solid red",
            borderRadius: "35px",
            backgroundColor: "red",
            color: "whitesmoke",
            font: "bold",
            margin: "10px",
          }}
        >
          <button
            type="submit"
            style={{
              border: "5px solid red",
              borderRadius: "35px",
              backgroundColor: "red",
              color: "whitesmoke",
              font: "bold",
              padding: "10px",
              fontSize: "large",
              fontWeight: "bolder",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Show Vehicles
          </button>
        </div>
      </form>
    </div>
  );
}
