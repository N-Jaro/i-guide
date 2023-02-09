const importFlowbiteFunc = function(flowbitePathStr)
{
    const flowbiteScriptEl = document.createElement('script')
    flowbiteScriptEl.setAttribute(
        'src', flowbitePathStr
    )
    document.body.appendChild(flowbiteScriptEl)
}
importFlowbiteFunc('../node_modules/flowbite/dist/flowbite.js') // here goes your path to a local flowbite.js you want to import\

const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example')
    }
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses: 'text-ig-orange hover:text-[#F4824A] border-[#F4824A]',
    inactiveClasses: 'text-black hover:text-[#F4824A] border-[#F4824A]',
    onShow: () => {
        console.log('tab is shown');
    }
};

/*
* tabElements: array of tab objects
* options: optional
*/
// import { Tabs } from 'flowbite';
const tabs = new Tabs(tabElements, options);
tabs.show('contacts');

tailwind.config = {
    theme: {
        extend: {
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
