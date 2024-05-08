const staffMembers = [
    {
        "name":"John Doe",
        "short_name": "John D.",
        "position": "CEO",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Jane Dove",
        "short_name": "Jane D.",
        "position": "COO",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Albert Epstein",
        "short_name": "Albert E.",
        "position": "Chief Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Jeffrey Einstein",
        "short_name": "Jeffrey E.",
        "position": "Chief Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"P Diddler",
        "short_name": "P. Diddy",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"André TheMiniscule",
        "short_name": "André T.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Minion Gru",
        "short_name": "Minion G.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Alfred Wayne",
        "short_name": "Alfred W.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Priya Patel",
        "short_name": "Priya P.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Lee Chen",
        "short_name": "Lee C.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Tyrone Tyreek",
        "short_name": "Tyrone T.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Tastiana Penkovik",
        "short_name": "Tatsiana P².",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    },
    {
        "name":"Nikki Lada",
        "short_name": "Nikki L.",
        "position": "Architect",
        "poster":"",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque voluptatibus sequi minus soluta error dignissimos quod non cumque eveniet at repudiandae voluptas, nisi incidunt esse tempore adipisci, facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi nihil omnis quibusdam, saepe, quos, non consequatur deserunt eaque fuga assumenda. Iste laudantium possimus ipsam. Voluptatibus aperiam fuga cupiditate non!"
    }
]