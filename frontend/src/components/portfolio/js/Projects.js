import ReactJS from "react";

import ProjectCard from "./ProjectCard.js";

function Projects() {
    return (
        <div className={"max-w-screen-xl min-h-[calc(100%-110px)] px-16 py-4 mx-auto"}>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Featured Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap mb-4 md:mb-8"}>
                <ProjectCard title={"Coffee Status"}
                             website={"https://coffee.leoding.com"}
                             github={"https://github.com/leoldding/coffeeStatusV3"}
                             description={"A web app that shows if I am currently doing work at the coffee shop I frequent. " +
                                 "Admin authentication required to change displayed status. " +
                                 "WebSockets used for realtime updates."}
                             tags={["Golang", "PostgreSQL", "Docker", "AWS", "ReactJS", "TailwindCSS", "Nginx"]}
                             featured={true} />
                <ProjectCard title={"Chat Room"}
                             website={"https://chat.leoding.com"}
                             github={"https://github.com/leoldding/chatAppV2"}
                             description={"A web app that offers realtime text communication between users. " +
                                 "Room codes, which are chosen by the user, are used to separate the different rooms. " +
                                 "A publisher-subscriber system is used to send messages to their correct rooms."}
                             tags={["Golang", "Docker", "AWS", "ReactJS", "TailwindCSS", "Nginx"]}
                             featured={true} />
            </div>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Other Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap"}>
                <ProjectCard title={"Application Tracker CLI Tool"}
                             github={"https://github.com/leoldding/apptrack"}
                             description={"Developed a CLI tool for efficient job application management. " + 
                                 "Automated scraping and parsing of job details from LinkedIn, Greenhouse, and Lever pages. " + 
                                 "Integrated Notion’s API to enable seamless transmission of data into our database system."}
                             tags={["Golang"]} />
                <ProjectCard title={"Image Caption Experiment"}
                             github={"https://github.com/leoldding/image-captioning-CLIP"}
                             description={"Implemented 6 different deep learning models based on OpenAI's CLIP model. " +
                                 "Used varied datasets, encoders, and creativity. " +
                                 "Tested using BLEU metric."}
                             tags={["Python", "PyTorch"]} />
                <ProjectCard title={"To-Do List"}
                             website={"https://todo.leoding.com"}
                             github={"https://github.com/leoldding/todolistV2"}
                             description={"A web app which allows users to keep track of their \"to-dos\". " +
                                 "Users must create accounts in order to access their own to-do items."}
                             tags={["Golang", "PostgreSQL", "Docker", "AWS", "ReactJS", "CSS", "Nginx"]} />
                <ProjectCard title={"Media Sentiment Analysis"}
                             github={"https://github.com/leoldding/media-sentiment-analysis"}
                             description={"Created a model which aims to classify the sentiment of given media texts. " +
                                 "Model performed 20% and 32% better on news and social media data respectively compared to the baseline."}
                             tags={["Python", "Pandas", "scikit-learn"]} />
                <ProjectCard title={"Soccer Analytics"}
                             github={"https://github.com/leoldding/soccer-analytics"}
                             description={"Analyzed performance metrics from three European leagues. " +
                                 "Trained logistic regression models to classify winners and losers. " +
                                 "Models had an average AUC ROC score of 0.81."}
                             tags={["Java", "SQL", "Spark", "Hadoop", "Hive", "Impala"]} />
               <ProjectCard title={"Calculator"}
                             github={"https://github.com/leoldding/calculator"}
                             description={"Recreated iOS calcultor as a web app."}
                             tags={["TypeScript", "ReactJS", "CSS"]} />
                <ProjectCard title={"Spam Classifier"}
                             github={"https://github.com/leoldding/spam-classifier"}
                             description={"Created a logistic regression model which classifies text messages from a dataset as spam. " +
                                 "Model performed with precision and recall scores of 1 and 0.76 respectively."}
                             tags={["Python", "scikit-learn"]} />
                <ProjectCard title={"Movie Ratings Analysis"}
                             github={"https://github.com/leoldding/movie-ratings-analysis"}
                             description={"Analyzed the effect of 76 different characteristics on ones enjoyment of different movies. " +
                                 "Wrote a report on the analytical findings responding to 10 proposed questions."}
                             tags={["Python", "Pandas", "scikit-learn"]} />
            </div>
        </div>
    );
}

export default Projects;
