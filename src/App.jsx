import { useState } from 'react';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
    <div className="bg-[url('bg.jpeg')] h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-opacity-75 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          <div className="w-full lg:w-1/2">
            {/* Text Section */}
            <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold mb-1 text-[#00FF86]">
              WORK TO LIVE
            </h4>
            <p className="text-white mb-2 text-lg font-bold">
              Create a life you enjoy. Experience flexibility, security
              and lots of opportunities to grow. Welcome to your shift
              platform.
            </p>
            <p className="text-[#00FF86] text-lg font-bold">
              Sign Up Today. Work from tomorrow.
            </p>

            {/* Form Section */}
            <div className="bg-white mt-8 p-4 rounded-lg shadow-lg flex flex-col lg:flex-col lg:max-w-lg lg:w-full">
              <form>
                <div className="flex flex-col space-y-4 lg:space-y-4 lg:space-x-0 lg:flex-col lg:space-x-0 relative">
                  {/* Dropdown Menu */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="bg-gray-100 text-gray-900 text-sm rounded-md p-4 w-full cursor-pointer   flex justify-between items-center "
                    >
                      {selectedCategory}
                      <svg
                        className={`w-8 h-8 text-[#691edd] ml-2 transform transition-transform duration-300 hover:border-green-700 hover:ring-emerald-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-full z-10 ">
                        <ul className="p-2 space-y-2">
                          {['All Categories', 'Hospitality', 'Logistics', 'Retail', 'Training', 'Volunteering'].map((category) => (
                            <li key={category}>
                              <button
                                type="button"
                                onClick={() => handleCategoryChange(category)}
                                className="block text-gray-900 px-4 py-2 text-sm hover:bg-[#adc6ff] w-full text-left transition-colors duration-300 ease-in-out"
                              >
                                {category}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Location"
                    className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#691edd] w-full cursor-text hover:border-[#691edd]"
                  />
                  <button className="bg-[#691EDD] text-white p-4 rounded-md hover:bg-white hover:border hover:border-[#691edd] hover:text-[#691edd] focus:outline-none focus:ring-2 focus:ring-[#691edd] w-full cursor-pointer">
                    Find a Shift
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* // Second section */}

<div className="bg-[#175047]">
  <div className="flex justify-around text-center secondsection text-[20px] font-[sans-serif] pt-8 pb-8 font-size:text-xl">
    <div className="section">
      <span>
        <p className="text-white">Earn on average</p>
        <p className="text-[#121BF4]"><strong>± €20 per hour</strong></p>
      </span>
    </div>

    <div className="section">
      <span>
        <p className="text-white">Get paid</p>
        <p className="text-[#121BF4]"><span className="text-white">in </span><strong>3 days</strong></p>
      </span>
    </div>

    <div className="section3">
      <span>
        <p className="text-white">Pick from</p>
        <p className="text-[#121BF4]"><strong>20,000+ shifts</strong></p>
      </span>
    </div>

    <div className="section flex">
      <span className="text-white">
        <p>Cancel up to</p>
        <p className="text-[#121BF4]"><strong>24 h. before your shift</strong></p>
      </span>
    </div>
  </div>

  <div className="pb rounded-tl-[240px] bg-white py-24">
    <div className="container mx-auto px-8 lg:px-28">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <video
            id="cb7e8212-38d9-328b-d260-3c297bff93fc-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ backgroundImage: "url('https://cdn.prod.website-files.com/60f544c69dbfa61e87137ca0/63ef3884de17fecd778fb836_Animation%201%20NL-poster-00001.jpg')" }}
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf3e39_Animation%201%20NL-transcode.mp4" data-wf-ignore="true" />
            <source src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf3e39_Animation%201%20NL-transcode.webm" data-wf-ignore="true" />
          </video>
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex ml-24 flex-col justify-center text-center lg:text-left px-4 space-y-4">
          <h2 className="text-6xl font-bold text-[#123633] mb-0">Work on your own terms</h2>
          <p className="text-[#123633] text-xl leading-normal mb-6">
            You decide when and where you work. Choose from thousands of shifts in all kinds of industries. Plan your life how you like it.
          </p>
          <p>‍ ‍‍Change of plans? Simply change your work planning, too.</p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="https://web.temper.works/en-nl/signup"
              className="bg-[#691edd] text-white rounded-md px-16 py-4 text-center hover:bg-white hover:text-[#691edd] border border-[#691edd]"
            >
              <b>Download the app</b>
            </a>
            <a
              href="/en-nl/business/how-temper-works"
              className="text-[#691edd] flex items-center hover:underline"
            >
              <b>How it works</b>
              <img
                src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf36e8_arrow%20right%20small.svg"
                loading="lazy"
                alt="Arrow"
                className="ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto bg-[#e8f3f0] flex justify-around items-center rounded-2xl mx-auto">
      {/* First divsub1 */}
      <div className="section_feature-highlight-block flex items-center rounded-tl-[240px]">
        <img
          src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf3de3_Clock.svg"
          loading="lazy"
          alt="Clock Icon"
          className="section_feature-highlights-icon w-7 mr-2"
        />
        <p className="text-center">20,000+ shifts</p>
      </div>

      {/* Second divsub2 */}
      <div className="section_feature-highlight-block flex items-center">
        <img
          src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf3de2_Flag.svg"
          loading="lazy"
          alt="Flag Icon"
          className="section_feature-highlights-icon w-7 h-16 mr-2"
        />
        <p className="text-center">10,000+ companies</p>
      </div>

      {/* Third divsub3 */}
      <div className="section_feature-highlight-block flex items-center">
        <img
          src="https://cdn.prod.website-files.com/65c0a02eaa3a1d17abdf36c2/65c0a02eaa3a1d17abdf3e09_Group%201402.svg"
          loading="lazy"
          alt="Group Icon"
          className="section_feature-highlights-icon w-6 h-16 mr-2"
        />
        <p className="text-center">24h cancellation</p>
      </div>
    </div>
  </div>
</div>

</>


  );
}


export default App;
