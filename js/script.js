const hideLoader = () => {
    const loadingContainer = document.getElementById('loading');
    loadingContainer.classList.add('hidden');
}

const showLoader = () => {
    const loadingContainer = document.getElementById('loading');
    loadingContainer.classList.remove('hidden');
}

const showModalInfo = async (id) => {
    let url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
    if (id >= 10) {
        url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    }

    // {id: '01', tool_name: 'ChatGPT', description: "ChatGPT is an AI-powered chatbot platform that use…'s GPT technology to simulate human conversation.", website: 'https://openai.com/', logo: 'https://cdn.openai.com/research-covers/gpt-3-social.jpg', …}

    fetch(url)
     .then(res => res.json())
     .then(responseData => {
        const data = responseData.data;
        console.log(data);
        const container = document.getElementById('my_modal');
        container.innerHTML = `
            <form method="dialog" class="modal-box max-w-[70%]">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div class="p-3 flex flex-col md:flex-row rounded-xl gap-3">
                    <div class="border bg-[#EB57570D] border-red-300 rounded-lg">
                        <h2 class="text-2xl m-3">${data.description}</h2>
                        <div class="flex flex-col md:flex-row  justify-around gap-4 m-3">
                            <p class="bg-white rounded-2xl text-[#03A30A] px-8 py-2 text-center">
                                ${data.pricing[0].price} <br> ${data.pricing[0].plan}
                            </p>
                            <p class="bg-white rounded-2xl text-[#F28927] px-8 py-2 text-center">
                                ${data.pricing[1].price} <br> ${data.pricing[1].plan}
                            </p>
                            <p class="bg-white rounded-2xl text-[#EB5757] px-8 py-2 text-center">
                                ${data.pricing[1].price} <br> ${data.pricing[1].plan}
                            </p>
                        </div>
                        <div class="flex flex-row p-4">
                            <div>
                                <h2 class="text-3xl font-semibold">Features</h2>
                                <ul class="list-disc m-4">
                                    <li>${data.features[1]?.feature_name}</li>
                                    <li>${data.features[2]?.feature_name}</li>
                                    <li>${data.features[3]?.feature_name}</li>
                                </ul>
                            </div>
                            <div >
                                <h2 class="text-3xl font-semibold">Integrations</h2>
                                <ul class="list-disc m-4">
                                    <li>${data.integrations[0]}</li>
                                    <li>${data.integrations[1]}</li>
                                    <li>${data.integrations[2]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-200 rounded-lg flex flex-col justify-center items-center p-4 mx-6 gap-y-3">
                        <img class="rounded-xl" src="${data.image_link[0]}" alt="image">
                        <h2 class="text-2xl font-semibold text-center">Hi, how are you doing today?</h2>
                        <p class="text-[#585858] font-thin text-center">I'm doing well, thank you for asking. How can i assist you today?</p>
                    </div>
                </div>
            </form>
        `;
    })
}

const displayTools = (tools) => {
    // 0. get div container
    // 1. create a div element and add class for each tool in tools
    const containerElement = document.getElementById('tools-container');
    // {id: '12', name: 'Facebook AI', description: 'Facebook AI is a collection of tools and technolog… to advance the field of artificial intelligence.', image: 'https://itchronicles.com/wp-content/uploads/2020/0…acebook-uses-Artificial-intelligence-1024x576.jpg', published_in: '10/1/2022', …}
    tools.forEach(tool => {
        const divElement = document.createElement('div');
        divElement.classList = 'p-4 rounded-xl border border-gray-200';
        divElement.innerHTML = `
            <img class="rounded-xl" src="${tool.image}" alt="ai">
            <h2 class="text-[#111] text-3xl font-semibold mt-3">Features</h2>
            <ul class="list-decimal mx-5 my-2 text-[#585858]">
                <li>Natural language processing</li>
                <li>Contextual understanding</li>
                <li>Text generation</li>
            </ul>
            <div class="w-full h-[1px] bg-slate-400 my-5"></div>
            <div class="flex flex-row justify-between items-center">
                <div>
                    <h3 class="text-3xl font-bold mb-2">${tool.name}</h3>
                    <div class="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path
                                d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z"
                                stroke="#585858" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span class="text-[#585858] ml-3">${tool.published_in}</span>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-full p-4 cursor-pointer" onclick="my_modal.showModal(); showModalInfo(${tool.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        `;

        containerElement.appendChild(divElement);
        }
    ); // end of forEach
    hideLoader();
    document.getElementById('tools-container').classList.remove('hidden');
}

const getData = async () => {
    showLoader();
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await res.json();
    const tools = data.data.tools;
    return tools;
}

const showAllData = () => {
    document.getElementById('tools-container').classList.add('hidden');
    getData().then(res => {
        displayTools(res);
    });
}


const sortByDate = function() {
    document.getElementById('tools-container').classList.add('hidden');
    getData().then(res => {
        res.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in);
        })
        // access the container
        document.getElementById('tools-container').innerText = "";
        displayTools(res);
    })
}

// // for no internet connections
// const el = document.getElementById('tools-container');
// if (el.innerText == '') {
//     el.innerText = 'Ooops! Please check your internet connections!';
// }

showAllData();

