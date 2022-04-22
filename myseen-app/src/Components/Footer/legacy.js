import React from "react";
import {GroupLegacy, HomeContainer, HomeContent, ListLegacy, Question, ULLegacy} from "../Home/Home.elements";

export default function Legacy(){
    return (
        <HomeContainer>
            <HomeContent>
                <h1>Engagement de confidentialité</h1>
                <GroupLegacy>
                    <Question>Vue d’ensemble : </Question>
                    <ULLegacy>
                        <ListLegacy>MySeen est compilé avec les demandes GDPR.</ListLegacy>
                        <ListLegacy>MySeen collècte seulement tes identifiants (nom et prénom), toutes les autres données telles que les messages privés, les images échangés dans les chat sont gardés dans le serveur et la base de donnée (ce qui veut dire que ces données ne seront jamais vendues ou réutilisé).</ListLegacy>
                        <ListLegacy>MySeen garde ton nom et prénom qui sont inscrit sur les fiches d’heures, ces fiches d’heures seront téléchargés pour une utilisation admninistrative. Toutes les autres informations ne seront jamais exportés.</ListLegacy>
                    </ULLegacy>
                </GroupLegacy>
                <GroupLegacy>
                    <Question>Quelles informations nous gardons ? </Question>
                    <ULLegacy>
                        <ListLegacy>Lorsque ton compte est créé nous stockons ton nom et ton prénom afin de pouvoir créer celui-ci.</ListLegacy>
                        <ListLegacy>Lorsque tu te connectes sur ton compte, nous gardons les informations de ton téléphones (numéro du device) afin de t’envoyer des notifications : telles que nouveau chat, nouveau chantier, nouveau rendez-vous.</ListLegacy>
                        <ListLegacy>Toutes les autres informations ne sont ni partagés, ni vendues à d’autres personnes ou organismes.</ListLegacy>
                        <ListLegacy>Lorsque tu vas créer une fiche d’heure tu vas renseigner ton nom et ton prénom , nous garderons et téléchargerons cette fiche d’heure à des fins admnistratives en interne. Elles ne seront aucunement vendues.</ListLegacy>
                    </ULLegacy>
                </GroupLegacy>
                <GroupLegacy>
                    <Question>Quand est-ce que mon application envoie des données à Lanvest ?</Question>
                    <ULLegacy>
                        <ListLegacy>Lorsque tu vas créer une fiche d’heure, les données renseignées seront envoyés à myseen.</ListLegacy>
                        <ListLegacy>Lorsque tu demandes tes congés, les données seront envoyés à myseen.</ListLegacy>
                        <ListLegacy>Lorsqu’un rendez-vous ou un chantier t’a été attribué nous utilisons ton nom et prénom.</ListLegacy>
                        <ListLegacy>Lorsque tu te connectes sur ton compte, nous gardons les informations de ton téléphone comme son identité afin de pouvoir t’envoyer des notifications.</ListLegacy>
                    </ULLegacy>
                </GroupLegacy>
                <GroupLegacy>
                    <Question>Comment supprimer mon compte ?</Question>
                    <ULLegacy>
                        <ListLegacy>Etant donnée que c’est une application en interne, tu dois juste demander à ton manager de supprimer ton compte.</ListLegacy>
                    </ULLegacy>
                </GroupLegacy>
                <GroupLegacy>
                    <Question>Besoin de plus d'information ?</Question>
                    <ULLegacy>
                        <ListLegacy>Si cela concerne l’application mobile, n’hésite pas à contacter le développeur mobile : abelcoindozm@gmail.com, sinon, contacte Lanvest via cette adresse mail : contact@lanvest.com</ListLegacy>
                    </ULLegacy>
                </GroupLegacy>
            </HomeContent>
        </HomeContainer>
    );
};

