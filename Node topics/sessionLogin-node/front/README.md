# dashboard 

useEffect(() => {
  (async () => {
    try {
      let api = ` link /dashboard`;
      const response = await axios.get(api, { withCredentials: true });

      if (response.data.msg === "Not logged in") {
        navigate("/login");
      } else {
        setmydata(response.data.user);
      }

    } catch (err) {
      console.log(err);
    }
  })();
}, []);

