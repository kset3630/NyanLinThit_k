import axios from "axios";

// fetch data from "example.com/api"
export default async function HomeApi() {
  const response = await axios.get(
    "https://be.nyanlynnthitanalytica.org/api/v1/home"
  );

  let listWithoutState = [];
  let listStatement = [];

  listWithoutState = response.data.resources;
  listStatement = response.data.resources;

  //   remove array number where listItems._id === STATEMENTS from listItems

  let Statement = listStatement.filter((item) => item._id === "STATEMENTS");

  for (var i = 0; i < listWithoutState.length; i++) {
    if (listWithoutState[i]._id === "STATEMENTS") {
      listWithoutState.splice(i, 1);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <h2>WithoutSTATEMENTS</h2>
      {listWithoutState.map((item) => (
        <div key={item._id}>
          <p>ID: {item._id}</p>
          {/* Displaying the inner resources array */}
          {item.resources &&
            item.resources.map((resource, index) => (
              <div key={index}>Resource: {JSON.stringify(resource)}</div>
            ))}
        </div>
      ))}
      <h2>STATEMENTS</h2>
      {Statement.map((item) => (
        <div key={item._id}>
          <p>ID: {item._id}</p>
          {/* Displaying the inner resources array */}
          {item.resources &&
            item.resources.map((resource, index) => (
              <div key={index}>Resource: {JSON.stringify(resource)}</div>
            ))}
        </div>
      ))}
    </>
  );
}