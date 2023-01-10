# Product Overview (Microservice API)

API microservice solution for an E-commerce legacy API that handles the product overview portion of the website.

# Technology

API microservice was built with Express.js with MongoDB as the database choice. Designed to compile all data into one collection using aggregation for best query speed performance(Justification: will only have very limited edit operation and no duplicate data in database).

# Designed To Scale

K6, loader.io, and New Relic were used for stress testing and identification of potential bottlenecks.

Deployed on Amazon EC2 instance with 3 servers and NGINX as a load balancer and configured for caching.

# End Result

Able to handle 3000 RPS with <10ms response time and 0% error rate when stress tested on deployed version. Database contained over one million records compiled from multi-million entries in 5 tables.

# Author

Built by Jingtian Liu
