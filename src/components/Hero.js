import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <img src={`${process.env.PUBLIC_URL}/images/photo-grid.png`} className="hero--photo" alt="grid of experience photos"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}