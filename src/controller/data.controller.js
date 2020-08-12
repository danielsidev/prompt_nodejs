class Data {
    constructor(data){
        this.b           = 1;
        this.kb          =  this.b * 1000;
        this.mb          =  this.kb * 1000;
        this.objResponse = {value:0, unity:''};
        this.data        = data;
    }
    setBytes(){
        this.objResponse.value = this.data;
        this.objResponse.unity = 'B';
    }
    setKilobytes(){
        this.objResponse.value = (this.data / this.kb);
        this.objResponse.unity = 'KB';
    }
    setMegabytes(){
        this.objResponse.value = (this.data / this.mb);
        this.objResponse.unity = 'MB';
    }
    converter(){
      if(this.data < this.kb){
        this.setBytes();
      }else if(this.data >=this.kb && this.data < this.mb){
        this.setKilobytes();
      }else if(this.data >= this.mb){
        this.setMegabytes();
      }
        return this.objResponse;
    }
}

module.exports = Data;