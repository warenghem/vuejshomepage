<template>
    <div>
        <div class="mx-auto text-center">
            <v-dialog
                    v-model="$store.state.plantModal"
                    persistent
                    max-width="600px"
            >
                <v-card>
                    <v-btn
                            icon
                            @click="$store.state.plantModal = false"
                    >
                        <v-icon
                                color="white"
                                medium
                        >
                            mdi-close
                        </v-icon>
                    </v-btn>
                    <v-card-text>
                        <div class="d-flex flex-column align-center justify-center h-100">
                            <p class="text-white pb-3 px-4 text-justify bottomText">
                                {{$t('video.rightSection.subtitle')}}
                            </p>
                            <div class="w-100 px-5">
                                <mailchimp-subscribe
                                        url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                        user-id="2f7dbf20677f88c14c1389365"
                                        list-id="ee2afb40a2"
                                        @error="snackbarError=true"
                                        @success="snackbarSuccess=true"
                                >
                                    <template v-slot="{ subscribe, setEmail, setName,loading }">
                                        <form @submit.prevent="subscribe" class="d-flex flex-column  w-100">
                                            <input type="text"
                                                   class="form-theme"
                                                   :placeholder="$t('video.rightSection.label1')"
                                                   @input="setName($event.target.value)"
                                            >
                                            <input type="email"
                                                   class="form-theme"
                                                   :placeholder="$t('video.rightSection.label2')"
                                                   @input="setEmail($event.target.value)"
                                            >
                                            <button class="btn-theme"
                                                    type="submit"
                                                    style="width: 100%!important; overflow-y: hidden;max-height: 48px">
                                                            <span v-if="loading">
                                                                <img src="../assets/images/ripple.svg"
                                                                     alt="loader"
                                                                     height="40px"
                                                                     style="margin-top: -13px;"
                                                                >
                                                            </span>
                                                <span v-else>{{$t('btnTitle')}}</span>
                                            </button>
                                        </form>
                                    </template>
                                </mailchimp-subscribe>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div class="custom-toast" v-if="snackbarSuccess">
            <div class="toast-box">
                <div class="toast-header d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center"><small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <span class="close" @click="snackbarSuccess=false">
                            ×
                        </span>
                    </div>
                </div>
                <div class="toast-body">
                    {{$t('video.rightSection.success')}}
                </div>
            </div>
        </div>
        <div class="custom-toast" v-if="snackbarError">
            <div class="toast-box">
                <div class="toast-header d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center"><small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <span class="close" @click="snackbarError=false">
                            ×
                        </span>
                    </div>
                </div>
                <div class="toast-body">
                    {{email}} {{$t('video.rightSection.error')}}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe'

    export default {
        name: "plant-form",
        components: {
            MailchimpSubscribe,
        },
        i18n: {
            messages: {
                en: {
                    video: {
                        rightSection: {
                            title: 'Project progress',
                            tag: 'Creation <br> of 3D objects',
                            subtitle: "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed of the progress of the project.",
                            label1: 'FIRST NAME',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem says',
                            alerttime: 'just now',
                            error: 'looks invalid or already subscribed. ',
                            success: 'Thank you! To avoid SPAM, we have sent you a confirmation email before ' +
                                'start planting ... see you soon!'
                        }
                    }
                },
                fr: {
                    video: {
                        rightSection: {
                            title: 'Avancement du projet',
                            tag: 'Création <br> d’objets en 3D',
                            subtitle: 'Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.',
                            label1: 'PRENOM ',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem dit',
                            alerttime: 'maintenant',
                            error: 'semble invalide ou déjà enregistré.',
                            success: 'Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de ' +
                                'commencer la plantation... A tout de suite!'
                        }
                    }
                },
            }
        },
        data() {
            return {
                snackbarSuccess: false,
                snackbarError: false,
                email: ''
            }
        },
    }
</script>

<style scoped>

</style>