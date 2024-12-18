import React from "react";

const AboutMe: React.FC = () => {

    return (
        <section id="about" className="container mx-auto flex flex-col md:flex-row items-center gap-20 py-12 px-6">
            {/* Profile Photo */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/406/611/small_2x/business-man-cartoon-character-vector.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* About Me Details */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
                <p className="text-gray-600 leading-relaxed">
                    Hello! I am a software developer with a passion for building web applications using React.js and TypeScript. I
                    specialize in creating clean, user-friendly interfaces and enjoy solving challenging technical problems. In my
                    free time, I love exploring new technologies and contributing to open-source projects.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;