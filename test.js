const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

// Create new document

BlogPost.create(
  {
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body:
      "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this: ",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);

// Find all documents

BlogPost.find({}, (error, blogspot) => {
  console.log(error, blogspot);
});

// Find documents containing 'The' in title

BlogPost.find(
  {
    title: /The/,
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

// Find document by ID

var id = "45613sad1sa32das6das4d56as1";

BlogPost.findById(id, (error, blogspot) => {
  console.log(error, blogspot);
});

// Find document by ID and update

var id = "45613sad1sa32das6das4d56as1";

BlogPost.findByIdAndUpdate(
  id,
  {
    title: "Updated Title",
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

// Find document by ID and delete

var id = "45613sad1sa32das6das4d56as1";

BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
