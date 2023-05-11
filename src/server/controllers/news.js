export const create = async (req, res) => {
  //code
  try {
    //code
    console.log("Controller Create");
    res.send("Controller Create");
  } catch (err) {
    //check err
    console.log(err);
    res.status(400).send("Server Create Error!!");
  }
};

//แสดงข้อมูล
export const list = async (req, res) => {
  try {
    const listData = await fetch(process.env.NEXT_API + "/listusers");
    const data = await listData.json();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server List Error!!");
  }
};

export const read = async (req, res) => {
  try {
    const readData = await fetch(
      process.env.NEXT_API + "/readusers/" + req.query.id
    );
    const readdata = await readData.json();
    console.log(readdata);
    res.send(readdata);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Read Error!!");
  }
};

export const update = async (req, res) => {
  try {
    //const id = req.query.id;
    //const userData = { first_name: "John Doe", last_name: "thailand" };
    const updateData = await fetch(
      process.env.NEXT_API + "/updateusers/" + req.query.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    console.log(updateData);
    res.send(updateData);
    //console.log("Controller Update");
    //res.send("Controller Update");
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Update Error!!");
    //throw new Error("Error updating data");
  }
};

export const remove = async (req, res) => {
  try {
    console.log("Controller remove");
    res.send("Controller remove");
  } catch (err) {
    console.log(err);
    res.status(400).send("Server remove Error!!");
  }
};
