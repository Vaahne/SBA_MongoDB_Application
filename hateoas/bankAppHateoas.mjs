function bankHateoas(req,res){
    return res.json({
        links: [
            { href: '/bank/users',rel: 'Bank Users',type: 'GET'},
            {href: '/bank/accounts',rel: 'Bank Accounts',type: 'GET'},
            {href: '/bank/withdraws',rel: 'Bank Withdrawels',type: 'GET'},
            
            { href: '/bank/users',rel: 'Bank Users',type: 'POST'},
            {href: '/bank/accounts',rel: 'Bank Accounts',type: 'POST'},
            {href: '/bank/withdraws',rel: 'Bank Withdrawels',type: 'POST'},
            
            {href: '/bank/users/:id',rel: 'Bank User',type: 'GET'},
            {href: '/bank/accounts/:id',rel: 'Bank Account',type: 'GET'},           
            {href: '/bank/withdraws/:id',rel: 'Bank Withdraw',type: 'GET'},

            {href: '/bank/users/:id',rel: 'Bank User',type: 'PUT'},
            {href: '/bank/accounts/:id',rel: 'Bank Account',type: 'PUT'},           
            {href: '/bank/withdraws/:id',rel: 'Bank Withdraw',type: 'PUT'},

            {href: '/bank/users/:id',rel: 'Bank User',type: 'DEETE'},
            {href: '/bank/accounts/:id',rel: 'Bank Account',type: 'DELETE'},           
            {href: '/bank/withdraws/:id',rel: 'Bank Withdraw',type: 'DELETE'}
            
    ]
    });
}

export default bankHateoas;
