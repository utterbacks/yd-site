const INFRA_ENV = process.env.INFRA_ENV;
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

module.exports = (path) => {
<<<<<<< HEAD

  if (INFRA_ENV === 'production') {
    return 'https://peaceful-spire-58679.herokuapp.com/' + path;
  } else {
    return `http://localhost:1337/` + path;
  }

};
=======
	if (INFRA_ENV === "production") {
		return "https://peaceful-spire-58679.herokuapp.com/" + path;
	} else {
		return `http://localhost:1337/` + path;
	}
};
>>>>>>> 758570ca97b8e6f12a2cc12503671c2e2d85b83b
