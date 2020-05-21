var base_path="http://localhost/runwal/";

$(document).ready(function(){

    $("#project_enquiry_submit").click(function(){    	
        var fname= $("#fname").val();
        var email= $("#email").val();
        var telephone= $("#telephone").val();
        var project= $("#project").val();
        var comments= $("#comments").val();  
        //alert(project_type);

        $.ajax({
		type: "POST",
		data: {fname:fname,email:email,telephone:telephone,project:project,comments:comments},
		dataType: 'json',
		url: base_path+"a/index.php/process/enquiry",
		success: function(enquiry_result){			
			if(enquiry_result['fname']){				
				$("#form_fname_error").html(enquiry_result['fname']);
			}else{
				$("#form_fname_error").html("");
			}

			if(enquiry_result['email']){				
				$("#form_email_error").html(enquiry_result['email']);
			}else{
				$("#form_email_error").html("");
			}

			if(enquiry_result['telephone']){				
				$("#form_telephone_error").html(enquiry_result['telephone']);
			}else{
				$("#form_telephone_error").html("");
			}			

			if(enquiry_result['project']){				
				$("#form_project_error").html(enquiry_result['project']);
			}else{
				$("#form_project_error").html("");
			}	

			if(enquiry_result['comments']){				
				$("#form_comments_error").html(enquiry_result['comments']);
			}else{
				$("#form_comments_error").html("");
			}		

			if(enquiry_result['enquiry_status']=="successful"){
				//location.href=base_url+"account/login";
				window.scrollTo(0, 0);
				$("#form_fields").html('<p style="text-align:center;font-size:16px;">Thank you for your interest in Runwal Group.</p> <p style="text-align:center;font-size:16px;">We will get back to you shortly</p>')
			}else if(enquiry_result['enquiry_status']=="failed"){
				alert("failed");
			}

			$("#submit_enquiry").html('Submit');
						
			}
		});

    });



    $("#c_submit_enquiry").click(function(){    	
        var fname= $("#c_fname").val();
        var email= $("#c_email").val();
        var telephone= $("#c_telephone").val();
        var comments= $("#c_comments").val();
        var project_type= $("#c_project_type").val();
        var project= $("#c_project").val();
        var nationality= $("#c_nationality").val();
        var type_of_use= $("#c_type_of_use").val();
        var requirment_type= $("#c_requirment_type").val();
        var budget= $("#c_budget").val();
        //alert(project_type);

        $.ajax({
		type: "POST",
		data: {fname:fname,email:email,telephone:telephone,comments:comments,project_type:project_type,project:project,nationality:nationality,type_of_use:type_of_use,requirment_type:requirment_type,budget:budget},
		dataType: 'json',
		url: base_path+"a/index.php/process/contact_enquiry",
		success: function(enquiry_result){			
			if(enquiry_result['fname']){				
				$("#form_c_fname_error").html(enquiry_result['fname']);
			}else{
				$("#form_c_fname_error").html("");
			}

			if(enquiry_result['email']){				
				$("#form_c_email_error").html(enquiry_result['email']);
			}else{
				$("#form_c_email_error").html("");
			}

			if(enquiry_result['telephone']){				
				$("#form_c_telephone_error").html(enquiry_result['telephone']);
			}else{
				$("#form_c_telephone_error").html("");
			}

			if(enquiry_result['comments']){				
				$("#form_c_comments_error").html(enquiry_result['comments']);
			}else{
				$("#form_c_comments_error").html("");
			}

			if(enquiry_result['project_type']){				
				$("#form_c_project_type_error").html(enquiry_result['project_type']);
			}else{
				$("#form_c_project_type_error").html("");
			}

			if(enquiry_result['project']){				
				$("#form_c_project_error").html(enquiry_result['project']);
			}else{
				$("#form_c_project_error").html("");
			}

			if(enquiry_result['nationality']){				
				$("#form_c_nationality_error").html(enquiry_result['nationality']);
			}else{
				$("#form_c_nationality_error").html("");
			}

			if(enquiry_result['type_of_use']){				
				$("#form_c_type_of_use_error").html(enquiry_result['type_of_use']);
			}else{
				$("#form_c_type_of_use_error").html("");
			}

			if(enquiry_result['requirment_type']){				
				$("#form_c_requirment_type_error").html(enquiry_result['requirment_type']);
			}else{
				$("#form_c_requirment_type_error").html("");
			}

			if(enquiry_result['budget']){				
				$("#form_c_budget_error").html(enquiry_result['budget']);
			}else{
				$("#form_c_budget_error").html("");
			}

			if(enquiry_result['enquiry_status']=="successful"){
				//location.href=base_url+"account/login";				
				$('html, body').animate({
					scrollTop: $(".Page").offset().top
				}, 500);  

				$("#c_form_fields").html('<p style="text-align:center;font-size:26px;padding-top:3%">Thank you for your interest in Runwal Group.</p> <p style="text-align:center;font-size:26px;padding-bottom:3%;">We will get back to you shortly</p>')
			}else if(enquiry_result['enquiry_status']=="failed"){
				alert("failed");
			}

			$("#c_submit_enquiry").html('Submit');
						
			}
		});

    });

    $("#cp_submit_enquiry").click(function(){    	
        var fname= $("#cp_fname").val();
        var email= $("#cp_email").val();
        var telephone= $("#cp_telephone").val();
        var department= $("#cp_department").val();
        var comments= $("#cp_message").val();        
        //alert(project_type);

        $.ajax({
		type: "POST",
		data: {fname:fname,email:email,telephone:telephone,department:department,comments:comments},
		dataType: 'json',
		url: base_path+"a/index.php/process/cp_enquiry",
		success: function(enquiry_result){			
			if(enquiry_result['fname']){				
				$("#form_cp_fname_error").html(enquiry_result['fname']);
			}else{
				$("#form_cp_fname_error").html("");
			}

			if(enquiry_result['email']){				
				$("#form_cp_email_error").html(enquiry_result['email']);
			}else{
				$("#form_cp_email_error").html("");
			}

			if(enquiry_result['telephone']){				
				$("#form_cp_telephone_error").html(enquiry_result['telephone']);
			}else{
				$("#form_cp_telephone_error").html("");
			}

			if(enquiry_result['department']){				
				$("#form_cp_department_error").html(enquiry_result['department']);
			}else{
				$("#form_cp_department_error").html("");
			}

			if(enquiry_result['comments']){				
				$("#form_cp_comments_error").html(enquiry_result['comments']);
			}else{
				$("#form_cp_comments_error").html("");
			}			

			if(enquiry_result['enquiry_status']=="successful"){
				//location.href=base_url+"account/login";				
				$('html, body').animate({
					scrollTop: $(".Page").offset().top
				}, 500);  

				$("#cp_form_fields").html('<p style="text-align:center;font-size:26px;padding-top:3%">Thank you for your interest in Runwal Group.</p> <p style="text-align:center;font-size:26px;padding-bottom:3%;">We will get back to you shortly</p>')
			}else if(enquiry_result['enquiry_status']=="failed"){
				alert("failed");
			}

			$("#cp_submit_enquiry").html('Submit');
						
		}

		});

    });
});

function getProjects(){
	var location= $("#location").val();           

    $.ajax({
	type: "POST",
	data: {location:location},
	url: base_path+"a/index.php/process/get_projects_byLocation",
	success: function(projects_result){					
		$("#project_field_box").html(projects_result);
	}
	
	});
}

