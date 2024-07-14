import { LightningElement, api } from 'lwc';

export default class ScoreInformation extends LightningElement {

    @api score;
    @api attemptId;
    @api numberOfQuestions;

   get numberofQuestionsCorrect(){
        return Math.floor(this.score/100 * this.numberOfQuestions);
    }

    get numberofQuestionsIncorrect(){
        return this.numberOfQuestions - this.numberofQuestionsCorrect;
    }

    handleDeleteAttempt(){
        console.log('handleDeleteAttempt',this.attemptId);
        const deleteEvent = new CustomEvent('deleteattempt',{
            detail: this.attemptId
        });
        this.dispatchEvent(deleteEvent);
    }
}