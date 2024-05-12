const staffMembers = [
    {
        "first_name": "Chadwick",
        "last_name": "Jones",
        "name":"",
        "short_name": "",
        "position": "CEO",
        "poster":"images/staff/chadwick_jones.webp",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Amani",
        "last_name": "Hassan",
        "name":"",
        "short_name": "",
        "position": "COO",
        "poster":"images/staff/amani_hassan.webp",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Liam",
        "last_name": "O'Connell",
        "name":"",
        "short_name": "",
        "position": "Head Architect",
        "poster":"images/staff/liam-o-connel.webp",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Alejandro",
        "last_name": "Ramirez",
        "name":"",
        "short_name": "",
        "position": "Project Manager",
        "poster":"images/staff/alejandro_ramirez.webp",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Lee",
        "last_name": "Kenshin",
        "name":"",
        "short_name": "",
        "position": "IT Specialist",
        "poster":"images/staff/lee_kenshin.webp",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Isabel",
        "last_name": "Mitchell",
        "name":"",
        "short_name": "",
        "position": "Administrative Assistant",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Maya",
        "last_name": "Walker",
        "name":"",
        "short_name": "",
        "position": "Architect",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Hiro",
        "last_name": "Tanaka",
        "name":"",
        "short_name": "",
        "position": "Architect",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "David",
        "last_name": "Thompson",
        "name":"",
        "short_name": "",
        "position": "Architect",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Aaliyah",
        "last_name": "Khan",
        "name":"",
        "short_name": "",
        "position": "Architect",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Sarah",
        "last_name": "Jones",
        "name":"",
        "short_name": "",
        "position": "Architect",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Evelyne",
        "last_name": "Dubois",
        "name":"",
        "short_name": "",
        "position": "Interior Designer",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "first_name": "Kiran",
        "last_name": "Patel",
        "name":"",
        "short_name": "",
        "position": "Interior Designer",
        "poster":"",
        "alt": "",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    }
]

window.onload = defineAlt();

function defineAlt(){
    staffMembers.forEach(element => {
        element.name = element.first_name + " " + element.last_name;
        element.short_name = element.first_name + " " + element.last_name.charAt(0) + ".";
        element.alt = "A portrait of " + element.name + ", " + element.position + "at POWERHOUSE";
    });
}