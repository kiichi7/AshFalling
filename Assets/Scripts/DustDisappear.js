#pragma strict
var ifDisappearWhenLand : boolean = true;

function Start () {

	if (!ifDisappearWhenLand) Destroy(this);

}

function Update () {

	if (transform.position.y < 1) {
	
		GetComponent(DustMover).moveSpeed = Vector3.zero;
		GetComponent(DustMover).randomSpeed = Vector3.zero;
		GetComponent(DustMover).nowRandomSpeed = Vector3.zero;
		Destroy(gameObject,5);
	
	}
}

