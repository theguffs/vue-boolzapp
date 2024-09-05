const { createApp } = Vue

createApp({
    data() {
        return {
            // Indice del contatto selezionato
            selectedContactIndex: 0,
             // dato per il messaggio dell'utente
            newMessage: '',
            // dato per filtrare gli utenti
            searchQuery: '',
            // dato per mostrare il menu a tendina dei messaggi
            showMessageOptions: null,
            contacts :[
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        // metodo per mostrare l'ultimo messaggio
        ultimoMessaggio(contact) {
            if (contact.messages.length > 0) {
                return contact.messages[contact.messages.length - 1];
            }
            else{
            // ritorna un oggetto vuoto se non ci sono messaggi per evitare errori
            return { message: 'Nessun messaggio', date: '' };
        }
        },
        // Estrai solo l'orario dalla stringa `date`
        soloOrario(dateString) {
            // Verifica se dateString è definita
            if (!dateString) {
                return '';
            }
        // divide la stringa di 'date' tra uno spazio vuoto e l'altro
        let orarioSecondi = dateString.split(' ')[1].split(':');
        // divide 'orarioSecondi' con i 2 punti
            //let ArrayOrario = orarioSecondi.split(':');
            //il return unisce la prima e la seconda parte di ArrayOrario escludendo il terzo
            return orarioSecondi[0] + ':' + orarioSecondi[1]
        },
        // estrai solo la data dalla stringa `date`
        soloData(dateString) {
        // verifica se dateString esiste
            if (!dateString) {
                return '';
            }
        // altrimenti splitta la parola
            else{
            return dateString.split(' ')[0];
            }
        },
        // Seleziona il contatto in base all'indice
        selectContact(index) {
            this.selectedContactIndex = index;
        },
        // Metodo per ottenere il contatto selezionato
        selectedContact() {
            return this.contacts[this.selectedContactIndex];
        },
        sendMessage(sendMessage) {
            if (this.newMessage.trim() == '') return;

            // Aggiunge il messaggio e lo pusha
            this.selectedContact().messages.push({
                date: this.getCurrentDateTime(),
                message: this.newMessage,
                status: 'sent'
            });
            this.newMessage = '';

            // risposta dell'interlocutore dopo 1 secondo
            setTimeout(() => {
                this.selectedContact().messages.push({
                    date: this.getCurrentDateTime(),
                    message: 'ok',
                    status: 'received'
                });
            }, 1000);
        },
        //funzione per mettere l'orario attuale del messaggio (spiegata dal tutor Loris)
        getCurrentDateTime() {
            const now = new Date();
            return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        },
        // Metodo per ottenere i contatti filtrati
        getFilteredContacts() {
            const query = this.searchQuery.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(query));
        },
        // metodo per mostrare o nascondere il menù a tendina
        toggleMessageOptions(index) {
            if (this.showMessageOptions == index) {
            // nasconde il menu se è già aperto
                this.showMessageOptions != null; 
            } 
            // altrimenti mostra il menu per il messaggio cliccato
            else {
                this.showMessageOptions = index; 
            }
        },
        // cancella il messaggio selezeionato
        deleteMessage(index) {
            if (this.selectedContact().messages.length > 0 && index >= 0) {
                this.selectedContact().messages.splice(index, 1);
            }
            // Chiude il menu a tendina dopo l'eliminazione
            this.showMessageOptions = null;
        }
    }
    
    }).mount('#app');