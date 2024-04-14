import { setUser, setToken } from "./userSlice";

export const fetchUserData = (email, password, navigate, dispatch) => {
    fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            const token = responseData.body.token;
            console.log(responseData.message);
            dispatch(setToken(token));

            if (token) {
                console.log("WIN");
                navigate("/user");
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

export const fetchUserProfil = (token, dispatch) => {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    console.log(headers, token);

    fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({}),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response.body.userName);
            const data = response.body;
            dispatch(setUser(data));
        })
        .catch((error) => {
            console.error(error);
        });
};
