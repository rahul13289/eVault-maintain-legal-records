# Blockchain-based eVault for Legal Records

# INTRODUCTION

In the history of digital transformation, the legal record maintenance witnessed a paradigm shift in the management legal records. The enhanced immutable and cryptographic properties of blockchain technology, integrated with smart contract system automation, this innovative system aims to redefine how legal records are stored, accessed and secured, paving the way for a more trustworthy, transparent, and efficient future in legal record management. 

The change in traditional paper based documentation to digital archives had opened good efficiency and accessibility benefits. However there are some raise in critical concerns regarding data confidentiality, security and trust. In idea of overcoming these challenges, this proposal introduces a groundbreaking solution: the design of a blockchain-based eVault explicitly designed for legal records.   

# ABSTRACT

PROBLEM STATEMENT:

Developing a blockchain-based eVault system for legal records that can ensure security, transparency, and accessibility for all stakeholders. 

EXISTING SYSTEM:

Legal records managed typically by establishing storage and filing solutions for legal documents, as well as ensuring the data within them is handled according to data protection and privacy laws. 

PROPOSED SYSTEM:

Our approach provides features for storage, manage and sharing the legal records securely and efficiently, with the potential to integrate with existing legal databases and case management systems.

# ARCHITECTURE 

![image](https://github.com/rahul13289/eVault-for-legal-records/assets/97829880/43beccb4-4891-49bf-befd-be82f78105dc)

# ALGORITHM 

Step 1: Platform Selection:  Choose a suitable blockchain platform (Ethereum, Hyperledger, or Corda) for the eVault system.
Step 2: Smart Contract Development: Develop smart contracts to manage access, permissions, and transactions within the blockchain network.
Step 3: User Interface Development: Design user-friendly interfaces for lawyers, judges, clients, and stakeholders.
Step 3.1: Include features such as document upload, retrieval, tracking changes, and sharing information.
Step 4: Privacy and Security Implementation: Implement appropriate access controls, encryption, and authentication mechanisms to ensure privacy and confidentiality of legal records.
Step 5: Integration with Existing Systems: Enable seamless integration with existing legal databases and case management systems to ensure interoperability and ease of use.
Step 6: Scalability and Adaptability: Design the system to be scalable and adaptable to accommodate future changes and upgrades in technology or requirements.
Step 7: Prototype Development: Develop a functional prototype of the eVault system incorporating all the above features.
Step 8: Documentation: Create a detailed design document outlining the architecture, features, and technical specifications of the eVault system.

## Features
- **Smart Contracts**: Manages access, permissions, and transactions securely.
  
- **User-friendly Interfaces**: Provides intuitive interfaces for lawyers, judges, clients, and other stakeholders.
 
- **IPFS Network**: Allows uploading, retrieval, tracking changes, and sharing legal documents.
  
- **Privacy and Confidentiality**: Ensures data privacy through access controls, encryption, and authentication mechanisms.
  
- **Integration**: Seamlessly integrates with existing legal databases and case management systems.

## Tech Stack
- **Client**: EJS , CSS, JavaScript
- **Server**: Node, Express
- **Blockchain**: Hyperledger Fabric
- **Database**: CouchDB
- **File Storage**: InterPlanetary File System (IPFS)
- **Authentication**: Digital signature

## Prerequisites
- Git
- Curl
- Node
- CouchDB
- IPFS
- Jq
- Docker and Docker-compose

## IPFS Network:
- Installation Commands:
```bash
 docker pull ipfs/go-ipfs
 docker run -d --name=ipfs_host ipfs/go-ipfs:latest
 docker exec -it ipfs_host /bin/sh
 ipfs init
 ipfs daemon

```
- Command for converting file to hash : 
```bash
ipfs add path/to/file
```
- Command for retrieving the file from hash :
```bash
ipfs get [hash]
```
- Command to extract content from hash :
```bash
ipfs cat [hash]
```

## Deploying the Application :
### Manual Setup:
#### Installation of Hyperledger Fabric :

- Hyperledger Fabric is more compatible with Linux. Therefore, I used Linux Ubuntu OS. Run the following command to install Hyperledger Fabric:

```bash
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
```

- If the link does not work on your device, open the link on another device, copy the script, and then run it on your device:

```bash
 chmod +x install-fabric.sh
./install-fabric.sh
```

#### Connecting the CouchDB :

- Change the configuration of all `core.yaml` files from LevelDB to CouchDB in peer section. 

- In the `test-network` directory, change the database option to `couchdb` in the `network.config` file.

#### Starting the fabric-network :
```bash
cd path/to/fabric-samples/test-network
./network.sh down
sudo ./network.sh up -s couchdb
sudo ./network.sh createChannel -c mychannel 
sudo ./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript -ccl javascript
```
#### Starting the application :
- Before starting the application, set up the folders like `application-javascript`, `chaincode-javascript` and `test-application`. Modify these files as per your requirements. In `application-javascript`and then follow these commands:
```bash
 cd path/to/evault_blockchain/asset-transfer-basic/application-javascript
 npm init
 npm i
 npm start
```

### Cloning the Repository:
#### Starting the fabric-network :
```bash
git clone https://github.com/rohith-bandi/evault_blockchain
cd path/to/fabric-samples/test-network
./network.sh down
sudo ./network.sh up -s couchdb
sudo ./network.sh createChannel -c mychannel 
sudo ./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript -ccl javascript
```
#### Starting the application :
```bash
 cd path/to/evault_blockchain/asset-transfer-basic/application-javascript
 npm init
 npm i
 npm start
```
## Web-Interfaces for admin :
### Portainer :  http://localhost/127.0.0.1:9000
- Install Docker interface Portainer with the following commands:
```bash
docker volume create portainer_data
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --name portainer portainer/portainer 
```
### CouchDB   :  http://localhost/127.0.0.1:5984/_utils 
- CouchDB is automatically installed using Docker during the network setup, and CouchDB containers will also be managed by Docker. The default username is `admin`, and the password is `adminpw`.

### Hyperledger Explorer : http://localhost/127.0.0.1:8081
- Install Hyperledger Explorer with the following commands:
```bash
cd path/to/fabric/fabric-samples/token-sdk/explorer
docker-compose down -v
docker-compose up -d
```
- Note: The username is `exploreradmin`, and the password is `exploreradminpw`. Before installation, make the required changes in the `connection-profile`.

### Hyperledger Explorer Database : http://localhost/adminer.php
- Install php-pgsql and Adminer with the following commands:
```bash
sudo apt-get update
sudo apt-get install php php-pgsql
wget https://github.com/vrana/adminer/releases/download/v4.8.1/adminer-4.8.1.php -O adminer.php
sudo mv adminer.php /var/www/html/adminer.php
sudo apt-get install apache2
```
- Note: For the server address, go to the Docker interface and check the IP address. The username is `hppoc`, the password is `password`, the database is `fabricexplorer`, and the system is `postgresql`.


## Acknowledgements

 - [Hyperledger Documentation ](https://hyperledger-fabric.readthedocs.io/en/release-2.5/)



## 🔗 Link

 - [ Static Mock-up ](https://legal-evault-rahul.onrender.com/)

# PROJECT TUTORIAL VIDEO

https://youtu.be/XNfDfIvFRz0?si=26BeTrzgQOu6lyZ5


![image](https://github.com/rahul13289/eVault-for-legal-records/assets/97829880/c6ced9e5-3d8b-460b-800e-d7fd4eb61d7d)




[![](https://visitcount.itsvg.in/api?id=rahul13289&icon=0&color=0)](https://visitcount.itsvg.in)

