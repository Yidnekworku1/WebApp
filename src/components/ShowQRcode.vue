<template>
    <div class="row">
        <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="panel panel-primary">
                    <div class="panel-heading"> {{tittle}} </div>
                    <div class="pannel-body">
                        <div class="form-group">
                            <label>e commerce id</label>
                            <input type="text" name="id" placeholder="Enter Id" class="form-control" v-model="text">
                        </div>
                        <div class="form-group">
                            <qr-code 
                                :text="text"
                                size="250"
                                color="#000"
                                bg-color="#fff" 
                                error-level="L">
                            </qr-code>
                        </div>
                    </div>
                </div>
               
            
        </div>
        <div class="col-md-2"></div>
    </div>
</template>
<script>
import VueQRCodeComponent from 'vue-qrcode-component'
export default {
     data(){
        return{
            tittle : "create QR code",
            text : '0'
        }
    },
    components:{
        qrCode: VueQRCodeComponent
    }
}
</script>

