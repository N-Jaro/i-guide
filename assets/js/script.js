import 'flowbite';
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
    activeClasses: 'text-[#F4824A] hover:text-[#F4824A] border-[#F4824A]',
    inactiveClasses: 'text-[#F4824A] hover:text-[#F4824A] border-[#F4824A]',
    onShow: () => {
        console.log('tab is shown');
    }
};





/*
* tabElements: array of tab objects
* options: optional
*/
const tabs = new Tabs(tabElements, options);
tabs.show('contacts');
