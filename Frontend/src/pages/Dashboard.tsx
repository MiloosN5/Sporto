// react
import { useEffect, useState } from "react";

// plugins
import axios from "axios";

// components
import FeedbackMessage, { FeedbackMessageProps } from "../components/feedbacks/FeedbackMessage";
import Page from "../components/helpers/Page";
import Section from "../components/helpers/Section";
import Heading from "../components/helpers/Heading";

const Dashboard = () => {
    const [user, setUser] = useState<any | null>(null);
    const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setMessage({ content: "You are not logged in.", type: "fail" });
                return;
            }

            try {
                const response = await axios.get("/api/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.user);
            } catch (error) {
                setMessage({ content: "Error fetching profile.", type: "fail" });
            }
        };

        fetchProfile();
    }, []);

    return (
        <Page blockPrefix='dashboard'>
            <Section
                blockPrefix='dashboard'
                headerChildren={
                    <Heading
                        title='Dashboard'
                        visibleTitle={true}
                        level={2}
                    />
                }
                contentChildren={
                    user ? (
                        <p>
                            Email: {user.email}
                        </p>
                    ) : (
                        <>
                            {message && <FeedbackMessage message={message} />}
                        </>
                    )
                }
            />
        </Page>
    );
};

export default Dashboard;
