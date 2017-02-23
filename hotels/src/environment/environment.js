var environment ={
    type:'DEV',
    'DEV':{
        basicAuth:{
            username:'MTZCPD600',
            password:'senhasenha11'
        },        
        url:{
            login:'https://s6sa2018p2.execute-api.us-east-1.amazonaws.com/dev/login',
            promotion: 'https://nsfmng90uf.execute-api.us-east-1.amazonaws.com/qa/promotions',
            hotel:{
                webSocket:"ws://lb-websocket-253766452.us-east-1.elb.amazonaws.com",
                avail:'https://yxo131t29e.execute-api.us-east-1.amazonaws.com/dev/hotels',
                detail:'https://yxo131t29e.execute-api.us-east-1.amazonaws.com/dev/hotels',
                rooms:'https://yxo131t29e.execute-api.us-east-1.amazonaws.com/dev/hotels',
                rateToken:'https://yxo131t29e.execute-api.us-east-1.amazonaws.com/dev/hotels/'
            }
        }
    }
}

export default environment;