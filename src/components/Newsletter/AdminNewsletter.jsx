import { Button, Paper, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import axios from "axios";
import localforage from "localforage";

const sendNewsletter = async () => {
    const loginData = await localforage.getItem("loginData");
    const result = await axios.post("http://localhost:8080/admin/send-letter", null, {
        headers: { Authorization: "Bearer " + loginData.token },
    });
    if (result.status !== 200 && result.status !== 201) {
        console.log("Error!");
        throw new Error("Could not send newsletter!");
    }
    return result.data;
}

export default function AdminNewsletter() {

    function handleSubmit(event) {
        event.preventDefault();
        sendNewsletter();
    }
    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 6.875,
                backgroundColor: "background.intermediate",
            }}
        >
            <Typography
                variant="h5"
                component="h5"
                fontWeight={700}
                sx={{
                    color: "primary.light",
                    fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
                }}
            >
                Send A Newsletter
            </Typography>
            <Typography
                variant="h6"
                component="h6"
                sx={{
                    color: "primary.light",
                    fontFamily: "'Raleway', 'Poppins', 'Arial', sans-serif",
                    mb: 5,
                }}
            >
                Send a newsletter to inform your readers about new publications.
            </Typography>
            <Form
                onSubmit={handleSubmit}
                style={{ display: "flex" }}
                method="post"
            >
                <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{
                        borderRadius: "0 2px 2px 0",
                        backgroundColor: "secondary.main",
                    }}
                    disableElevation
                >
                    Send
                </Button>
            </Form>
        </Paper>
    );
}
