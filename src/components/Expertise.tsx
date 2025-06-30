import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Salesforce",
    "Zoho CRM",
    "HubSpot",
    "Monday.com",
    "Reports and Dashboards",
    "Automation Workflows",
    "Custom Functions"
];

const labelsSecond = [
    "Make.com",
    "Zapier",
    "Postman",
    "JSON",
    "Javascript"
];

const labelsThird = [
    "OpenAI",
    "N8N",
    "Vappi",
    "ElevenLabs",
    "Ultravox",
    "Replit",
    "Voiceflow",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>CRM Implementation & Optimization</h3>
                    <p>I specialize in implementing, customizing, and optimizing CRM platforms, with a primary focus on Salesforce. My experience spans requirement gathering, workflow automation, and end-to-end user adoption strategies for scalable CRM success.
      </p>
                    <div className="flex-chips">
                        <span className="chip-title">Expertise on:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Integration & Automation</h3>
                    <p>I build efficient API integrations between your CRM and external platforms. I also automate business processes using webhooks, make.com/Zapier and integration tools to reduce manual tasks and increase productivity.
      </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Automation</h3>
                    <p>I help businesses get the most value from AI Automations for Sales, Marketing and Operations by using tools like OpenAI, N8N and Generative AI tools.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;