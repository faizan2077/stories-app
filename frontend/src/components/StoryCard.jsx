import React from 'react'

function StoryCard({ data, index }) {
    const { url, multimedia, title, abstract } = data;
    return (
        <>
            <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="story-link"
            >
                <div className="story-card" >
                    {multimedia?.[0]?.url && (
                        <img
                            src={multimedia?.[0]?.url}
                            alt={title}
                            className="story-image"
                        />
                    )}
                    <div className="story-content">
                        <h2>{title}</h2>
                        <p>{abstract}</p>
                    </div>
                </div>
            </a></>
    )
}

export default StoryCard